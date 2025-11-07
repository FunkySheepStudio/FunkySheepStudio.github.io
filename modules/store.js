const { reactive, toRaw } = Vue

const store = reactive(
    {
        Server: {
            online: false,
            Connect()
            {
                //const wsUri = "wss://portail.ra-cci.net/";
                const wsUri = "ws://localhost/";
                const websocket = new WebSocket(wsUri);

                websocket.onopen = () => {
                    store.Server.online = true
                }

                websocket.onmessage = (e) => {
                    console.log('Got a message')
                    console.log(e.data);
                }

                websocket.onclose = function(e) {  
                    store.Server.online = false
                    setTimeout(function() {
                        store.Server.Connect()
                    }, 1000);
                }

                websocket.onerror = function(err) {
                    store.Server.online = false
                };
            }

        },
        DB: {
            instance: null,
            Open: () => {
                let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
                let open = indexedDB.open("database", 1);

                open.onsuccess = function(event) {
                    store.DB.instance = event.target.result;
                    store.DB.Boats.Update()
                    store.DB.Maneuvers.Update()
                };

                open.onupgradeneeded = function() {
                    store.DB.instance = open.result;
                    let boats = store.DB.instance.createObjectStore("boats", {
                        keyPath: "id",
                        autoIncrement: true 
                    });
                    boats.createIndex("name", "name", { unique: false });

                    let boats_imgs = store.DB.instance.createObjectStore("boats_imgs", {
                        keyPath: "id",
                        autoIncrement: true 
                    });
                    boats_imgs.createIndex("boatId", "boatId", { unique: false });
                    boats_imgs.createIndex("imgBlob", "imgBlob", { unique: false });

                    let maneuvers = store.DB.instance.createObjectStore("maneuvers", {
                        keyPath: "id",
                        autoIncrement: true 
                    });
                    maneuvers.createIndex("name", "name", { unique: false });

                    let maneuvers_imgs = store.DB.instance.createObjectStore("maneuvers_imgs", {
                        keyPath: "id",
                        autoIncrement: true 
                    });
                    maneuvers_imgs.createIndex("maneuverId", "maneuverId", { unique: false });
                    maneuvers_imgs.createIndex("imgBlob", "imgBlob", { unique: false });
                };
            },
            Boats: {
                currentID: null,
                Current: () => {
                    return store.DB.Boats.All.find(obj => obj.id === store.DB.Boats.currentID)
                },
                All: [],
                Add: (boat) =>
                {
                    let addedBoat = boat? {...boat} : {}

                    let transaction = store.DB.instance.transaction(['boats'], 'readwrite');
                    let objectStore = transaction.objectStore('boats');
                    
                    let request = objectStore.put(addedBoat);

                    request.onsuccess = function(event) {
                        store.DB.Boats.Update()
                    };

                    request.onerror = function() {
                        console.log('Error adding boat');
                    };
                },
                AddImg: (boatId, imgBlob) =>
                {
                    let addedBoatImg = {
                      boatId,
                      imgBlob
                    }

                    let transaction = store.DB.instance.transaction(['boats_imgs'], 'readwrite');
                    let objectStore = transaction.objectStore('boats_imgs');
                    
                    let request = objectStore.put(addedBoatImg);

                    request.onsuccess = function(event) {
                        store.DB.Boats.Update()
                    };

                    request.onerror = function() {
                        console.log('Error adding boat');
                    };
                },
                Delete: (id) =>
                {
                    let transaction = store.DB.instance.transaction(['boats'], 'readwrite');
                    let objectStore = transaction.objectStore('boats');
                    
                    let request = objectStore.delete(id);

                    request.onsuccess = function(event) {
                        store.DB.Boats.Update()
                    };

                    request.onerror = function() {
                      console.log('Error deleting boat');
                    };
                },
                Update: () =>
                {
                    let transaction = store.DB.instance.transaction(['boats'], 'readwrite');
                    let objectStore = transaction.objectStore('boats');
                    let request = objectStore.getAll()

                    request.onsuccess = function(event) {
                        store.DB.Boats.All = event.target.result
                        store.DB.Boats.UpdateImgs()
                    };

                    request.onerror = function() {
                        console.log('Error listing Boats');
                    };
                },
                UpdateImgs: () =>
                {
                    let transaction = store.DB.instance.transaction(['boats_imgs'], 'readwrite');
                    let objectStore = transaction.objectStore('boats_imgs');
                    let request = objectStore.getAll()

                    request.onsuccess = (event) => {
                      for (let index = 0; index < event.target.result.length; index++) {
                          const img = event.target.result[index];
                          let boat = store.DB.Boats.All.find(boat => boat.id === img.boatId)
                          if (!boat.imgs)
                          {
                            boat.selectedImg = 0
                            boat.imgs = []
                          }

                          boat.imgs.push(img.imgBlob)
                      }
                    };

                    request.onerror = function() {
                        console.log('Error listing Boats');
                    };
                }
            },
            Maneuvers: {
                All: [],
                Add: (maneuver) =>
                {
                    let addedManeuver = maneuver? {...maneuver} : {}

                    let transaction = store.DB.instance.transaction(['maneuvers'], 'readwrite');
                    let objectStore = transaction.objectStore('maneuvers');
                    
                    let request = objectStore.put(addedManeuver);

                    request.onsuccess = function(event) {
                        store.DB.Maneuvers.Update()
                    };

                    request.onerror = function() {
                        console.log('Error adding maneuver');
                    };
                },
                AddImg: (maneuverId, imgBlob) =>
                {
                    let addedManeuverImg = {
                      maneuverId,
                      imgBlob
                    }

                    let transaction = store.DB.instance.transaction(['maneuvers_imgs'], 'readwrite');
                    let objectStore = transaction.objectStore('maneuvers_imgs');
                    
                    let request = objectStore.put(addedManeuverImg);

                    request.onsuccess = function(event) {
                        store.DB.Maneuvers.Update()
                    };

                    request.onerror = function() {
                        console.log('Error adding maneuver');
                    };
                },
                Delete: (id) =>
                {
                    let transaction = store.DB.instance.transaction(['maneuvers'], 'readwrite');
                    let objectStore = transaction.objectStore('maneuvers');
                    
                    let request = objectStore.delete(id);

                    request.onsuccess = function(event) {
                        store.DB.Maneuvers.Update()
                    };

                    request.onerror = function() {
                      console.log('Error deleting maneuver');
                    };
                },
                Update: () =>
                {
                    let transaction = store.DB.instance.transaction(['maneuvers'], 'readwrite');
                    let objectStore = transaction.objectStore('maneuvers');
                    let request = objectStore.getAll()

                    request.onsuccess = function(event) {
                        store.DB.Maneuvers.All = event.target.result
                        store.DB.Maneuvers.UpdateImgs()
                    };

                    request.onerror = function() {
                        console.log('Error listing Maneuvers');
                    };
                },
                UpdateImgs: () =>
                {
                    let transaction = store.DB.instance.transaction(['maneuvers_imgs'], 'readwrite');
                    let objectStore = transaction.objectStore('maneuvers_imgs');
                    let request = objectStore.getAll()

                    request.onsuccess = (event) => {
                      for (let index = 0; index < event.target.result.length; index++) {
                          const img = event.target.result[index];
                          let maneuver = store.DB.Maneuvers.All.find(maneuver => maneuver.id === img.maneuverId)
                          if (!maneuver.imgs)
                          {
                            maneuver.selectedImg = 0
                            maneuver.imgs = []
                          }

                          maneuver.imgs.push(img.imgBlob)
                      }
                    };

                    request.onerror = function() {
                        console.log('Error listing Maneuvers');
                    };
                }
            }
        }
    }
)

store.Server.Connect()
store.DB.Open()

const { reactive } = Vue

const sensors = reactive(
    {
        latitude: 0,
        longitude: 0,
        Start() {
            function error() {
                alert("Sorry, no position available.");
            }

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.latitude = position.coords.latitude
                    this.longitude = position.coords.longitude
                }, error);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
            console.log("sensors started")
        }
    }
)

sensors.Start()
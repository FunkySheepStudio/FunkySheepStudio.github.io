<template>
  <v-dialog
      v-model="isActive"
      width="auto"
    >
    <v-card>
      <!--<v-file-input
        label="Import a picture"
        accept="image/*"
        v-model="file"
        @change="Upload"
      />-->
      <video
        hidden
        ref="myVideo" :srcObject="stream"
        autoplay>
      </video>
      <canvas
        ref="myCanvas"
        width="800"
        height="600"
      />
      <template v-slot:actions>
        <v-btn
            v-show="stream"
            color="green"
            icon="mdi-camera"
            @click='TakePicture()'
        />
      </template>
    </v-card>
  </v-dialog>
</template>
<script>
    import { onMounted, ref } from 'vue'
  module.exports = {
    components: {
    },
    props: {
      show: {
        type: Boolean,
        default() {
          return false
            }
        }
    },
    setup() {
        const myCanvas = ref(null);
        const myVideo = ref(null);
        let myContext = ref(null)
        let stream = ref(null)

        onMounted(async () => {
            let constraints = {
                audio: false,
                video: {
                    width: { min: 800 },
                    height: { min: 600 },
                    facingMode: 'environment',
                },
            }
            myContext.value = myCanvas.value.getContext('2d');

            myContext.value.filter = 'contrast(1.3) saturate(1.2)'
            myContext.value.fillStyle = "black";
            myContext.value.fillRect(0, 0, 800, 600);
            function updateCanvas() {

              var ratio = Math.min(800 / myVideo.value.videoWidth, 600 / myVideo.value.videoHeight);
              let pictureWidth = myVideo.value.videoWidth * ratio
              let pictureHeight = myVideo.value.videoHeight * ratio

              myContext.value.drawImage(
                myVideo.value,
                (800 - pictureWidth) / 2 ,
                (600 - pictureHeight) / 2,
                pictureWidth,
                pictureHeight
              );
              window.requestAnimationFrame(updateCanvas);
            }
              
            window.requestAnimationFrame(updateCanvas);

            navigator.mediaDevices.enumerateDevices()
            .then(devices => {
              devices.forEach(device => {
                if (device.kind === "videoinput")
                {
                  console.log(device.getCapabilities()) 
                }
              });
            })

            navigator.mediaDevices.getUserMedia(constraints)
            .then(function (mediaStream) {
              stream.value = mediaStream
            })
            .catch(function (err) {
              console.log(err)
            });
        })

        return {
            myCanvas,
            myVideo,
            myContext,
            stream
        }
    },
    data() {
      return {
        file: null
      }
    },
    mounted () {
    },
    computed: {
      isActive: {
        get: function() {
          return this.show
        },
        set: function(newValue) {
          this.$emit('close-event')
        }
      }
    },
    methods: 
    {
      TakePicture() {
        //this.myContext.drawImage(this.myVideo, 0, 0, 800, 450);
        this.Save()
      },
      Upload()
      {
        var reader = new FileReader();
        reader.addEventListener("load",
        () => {
          const blob = reader.result ;
          const image = new Image() ;
          image.src = blob ;
          image.addEventListener('load', async  () => {
            this.myContext.drawImage(image, 0,0, this.myVideo.value.videoWidth, this.myVideo.value.videoHeight);
            this.Save()
          });
        }, false)
        reader.readAsDataURL(this.file);
      },
      Save()
      {
        this.myCanvas.toBlob((img) => {
          var reader = new FileReader();
            reader.onload = (event) => {
              var data = event.target.result;

              this.$emit('add-img', data)
          };
          // Convert Blob into DataURL string
          reader.readAsDataURL(img);
        })
      }
    }
  }
</script>
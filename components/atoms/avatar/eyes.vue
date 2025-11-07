<template>
    <path
        v-for="(path, i) in items[selected].paths"
        :fill='path.fill ? path.fill : color'
        :d="path.d"
        :fill-opacity="path.fillOpacity"
    />
    <circle
        v-for="(circle, i) in items[selected].circles"
        :cx="circle.cx"
        :cy="circle.cy"
        :r="circle.r"
        :fill='circle.fill ? circle.fill : color'
        :fill-opacity="circle.fillOpacity"
    />
    <polygon
        v-for="(polygon, i) in items[selected].polygons"
        :fill='color'
        :points="polygon.points"
        :stroke-width="polygon.strokeWidth"
        :fill-opacity="polygon.fillOpacity"
    />
</template>
<script>
module.exports = {
  components: {
  },
  props: {
        selected: {
            type: Number,
            default() {
                return 0
            }
        },
        color: {
            type: String,
            default() {
                return "#521541"
            }
        }
  },
  data() {
    return {
        items : [
                {
                    circles: [
                        {
                            cx: 148,
                            cy: 153,
                            r: 8,
                            fillOpacity: 0.7
                        },
                        {
                            cx: 212,
                            cy: 153,
                            r: 8,
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    polygons: [
                        {
                            points: '139,141 146,149 154,141 157,145 150,152 157,160 154,163 146,156 139,163 135,160 143,152 135,145 ',
                            strokeWidth: 0.9,
                            fillOpacity: 0.7
                        },
                        {
                            points: '206,141 213,149 221,141 224,145 217,152 224,160 221,163 213,156 206,163 202,160 210,152 202,145 ',
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    circles: [
                        {
                            cx: 148,
                            cy: 152,
                            r: 17,
                            fill: '#FEFEFE'
                        },
                        {
                            cx: 148,
                            cy: 143,
                            r: 8,
                            strokeWidth: 0.9
                        },
                        {
                            cx: 212,
                            cy: 152,
                            r: 17,
                            fill: '#FEFEFE'
                        },
                        {
                            cx: 212,
                            cy: 143,
                            r: 8,
                        }
                    ]
                },
                {
                    paths: [
                        {
                            d: 'M131 153c-1,0 0,2 1,1 2,-2 5,-3 11,-4 7,1 9,2 11,4 2,1 3,-1 2,-1 -1,-1 -5,-7 -13,-7 -7,0 -12,6 -12,7z',
                            fillOpacity: 0.7
                        },
                        {
                            d: 'M202 153c0,0 1,2 2,1 2,-2 5,-3 11,-4 7,1 9,2 11,4 2,1 3,-1 2,-1 -1,-1 -5,-7 -13,-7 -7,0 -12,6 -13,7z',
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    name: 'close',
                    paths: [
                        {
                            d: 'M131 160c-1,0 0,-2 1,-1 2,2 5,3 11,4 7,-1 9,-2 11,-4 2,-1 3,1 2,1 -1,1 -5,7 -13,7 -7,0 -12,-6 -12,-7z',
                            fillOpacity: 0.7
                        },
                        {
                            d: 'M202 160c0,0 1,-2 2,-1 2,2 5,3 11,4 7,-1 9,-2 11,-4 2,-1 3,1 2,1 -1,1 -5,7 -13,7 -7,0 -12,-6 -13,-7z',
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    paths: [
                        {
                            d: 'M138 138c4,0 7,2 9,5 1,-3 5,-5 8,-5 6,0 10,4 10,10 0,2 -1,5 -3,7 -5,5 -10,10 -15,16l-16 -16c-2,-2 -3,-5 -3,-7 0,-6 4,-10 10,-10z',
                        },
                        {
                            d: 'M204 138c4,0 7,2 9,5 2,-3 5,-5 9,-5 5,0 10,4 10,10 0,2 -2,5 -3,7 -5,5 -11,10 -16,16l-16 -16c-2,-2 -3,-5 -3,-7 0,-6 5,-10 10,-10z',
                        }
                    ]
                },
                {
                    paths: [
                        {
                            d: 'M229 155c0,4 -3,7 -7,7 -5,0 -8,-3 -8,-7 0,-2 1,-3 1,-5 -6,1 -9,2 -11,4 -2,1 -2,-1 -2,-1 1,-1 6,-8 14,-8 4,0 8,2 10,4 2,1 3,3 3,6z',
                            fillOpacity: 0.7
                        },
                        {
                            d: 'M157 155c0,4 -3,7 -7,7 -4,0 -8,-3 -8,-7 0,-2 1,-3 2,-5 -7,1 -10,2 -12,4 -1,1 -2,-1 -1,-1 0,-1 6,-8 13,-8 4,0 8,2 11,4 1,1 2,3 2,6z',
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    circles: [
                        {
                            cx: 148,
                            cy: 153,
                            r: 7,
                            fillOpacity: 0.7
                        }
                    ],
                    paths: [
                        {
                            d: 'M225 155c1,1 0,3 -2,1 -2,-1 -4,-3 -11,-3 -6,0 -9,2 -11,3 -1,2 -2,0 -2,-1 1,-1 6,-7 13,-7 8,0 12,6 13,7z',
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    paths: [
                        {
                            d: 'M148 159c-6,0 -13,1 -17,1 0,-1 0,-2 0,-3 0,-9 7,-16 17,-16 9,0 16,7 16,16 0,1 0,2 0,3 -3,0 -11,-1 -16,-1z',
                            fill: '#FEFEFE'
                        },
                        {
                            d: 'M148 159c-2,0 -3,0 -4,0 -2,-1 -4,-3 -4,-6 0,-3 3,-6 8,-6 4,0 7,3 7,6 0,3 -1,5 -3,6 -2,0 -3,0 -4,0z',
                        },
                        {
                            d: 'M212 159c-5,0 -13,1 -16,1 0,-1 0,-2 0,-3 0,-9 7,-16 16,-16 10,0 17,7 17,16 0,1 0,2 0,3 -4,0 -11,-1 -17,-1z',
                            fill: '#FEFEFE'
                        },
                        {
                            d: 'M212 159c-1,0 -2,0 -4,0 -2,-1 -3,-3 -3,-6 0,-3 3,-6 7,-6 4,0 8,3 8,6 0,3 -2,5 -4,6 -1,0 -2,0 -4,0z',
                        }
                    ]
                },
                {
                    circles: [
                        {
                            cx: 148,
                            cy: 153,
                            r: 17,
                            fill: '#FEFEFE'
                        },
                        {
                            cx: 148,
                            cy: 153,
                            r: 8
                        },
                        {
                            cx: 212,
                            cy: 153,
                            r: 17,
                            fill: '#FEFEFE'
                        },
                        {
                            cx: 212,
                            cy: 153,
                            r: 8
                        }
                    ]
                },
                {
                    circles: [
                        {
                            cx: 212,
                            cy: 153,
                            r: 15,
                            fillOpacity: 0.7,
                            fill: '#FEFEFE'
                        },
                        {
                            cx: 212,
                            cy: 153,
                            r: 8,
                        }
                    ],
                    paths: [
                        {
                            d: 'M131 156c-1,1 0,3 1,1 2,-1 5,-3 11,-3 7,0 9,2 11,3 2,2 3,0 2,-1 -1,-1 -5,-7 -13,-7 -7,0 -12,6 -12,7z',
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    circles: [
                        {
                            cx: 148,
                            cy: 153,
                            r: 8,
                        },
                        {
                            cx: 212,
                            cy: 153,
                            r: 8,
                        }
                    ],
                    paths: [
                        {
                            d: 'M134 173c0,-3 6,-12 8,-14 2,2 7,11 7,14 0,4 -3,8 -7,8 0,0 0,0 0,0 0,0 0,0 0,0 -4,0 -8,-4 -8,-8z',
                        }
                    ]
                }
            ]
    }
  },
  mounted () {
  }
}
</script>
<style>
</style>
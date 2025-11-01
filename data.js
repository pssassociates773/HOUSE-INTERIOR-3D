var APP_DATA = {
  "scenes": [
    {
      "id": "0-master-bed",
      "name": "master bed",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.666140853722407,
        "pitch": 0.028157250398900047,
        "fov": 1.2681567783652918
      },
      "linkHotspots": [
        {
          "yaw": -2.360039611446238,
          "pitch": 0.06177192373493412,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.6457718232379026,
        "pitch": 0.00371053454781034,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.964128509252344,
          "pitch": 0.10349569503533118,
          "rotation": 4.71238898038469,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.245336381458923,
          "pitch": 0.07729787103373198,
          "rotation": 4.71238898038469,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall",
      "name": "HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.03551441033618907,
          "pitch": 0.3761998864016274,
          "rotation": 4.71238898038469,
          "target": "5-wash-basin"
        },
        {
          "yaw": -0.026640643198330594,
          "pitch": 0.03550171853674122,
          "rotation": 0,
          "target": "0-master-bed"
        },
        {
          "yaw": -1.1082442843661724,
          "pitch": 0.11949806407004182,
          "rotation": 1.5707963267948966,
          "target": "2-living"
        },
        {
          "yaw": 0.6150987344814496,
          "pitch": 0.14729916060172954,
          "rotation": 4.71238898038469,
          "target": "1-kitchen"
        },
        {
          "yaw": 1.2880452510158662,
          "pitch": -0.05019895047825784,
          "rotation": 12.566370614359176,
          "target": "7-prayer-room"
        },
        {
          "yaw": 2.912304375364048,
          "pitch": 0.12124274949796288,
          "rotation": 0,
          "target": "4-cyard"
        },
        {
          "yaw": 1.298822409610624,
          "pitch": 0.2647232251702718,
          "rotation": 1.5707963267948966,
          "target": "6-bed-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cyard",
      "name": "C.YARD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.3844283371773827,
        "pitch": 0.18697510116298588,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.6311258920381437,
          "pitch": 0.1272653997012263,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wash-basin",
      "name": "WASH BASIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2375139139665627,
          "pitch": 0.07468735880241795,
          "rotation": 1.5707963267948966,
          "target": "0-master-bed"
        },
        {
          "yaw": -1.384610833048205,
          "pitch": 0.04928370356494405,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bed-2",
      "name": "bed 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.057730121412122415,
        "pitch": -0.001855267273899841,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.3116681316172016,
          "pitch": 0.05267146226961117,
          "rotation": 1.5707963267948966,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-prayer-room",
      "name": "PRAYER ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.585114794024765,
        "pitch": 0.27925068438744205,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.7869523976624695,
          "pitch": 0.33492909701951135,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

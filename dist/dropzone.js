(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Dropzone = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('./js/load-image')

require('./js/load-image-exif')
require('./js/load-image-exif-map')
require('./js/load-image-meta')
require('./js/load-image-orientation')

},{"./js/load-image":6,"./js/load-image-exif":3,"./js/load-image-exif-map":2,"./js/load-image-meta":4,"./js/load-image-orientation":5}],2:[function(require,module,exports){
/*
 * JavaScript Load Image Exif Map
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Exif tags mapping based on
 * https://github.com/jseidelin/exif-js
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*global define, module, require, window */

;(function (factory) {
  'use strict'
  if (typeof define === 'function' && define.amd) {
    // Register as an anonymous AMD module:
    define(['./load-image', './load-image-exif'], factory)
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'), require('./load-image-exif'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
}(function (loadImage) {
  'use strict'

  loadImage.ExifMap.prototype.tags = {
    // =================
    // TIFF tags (IFD0):
    // =================
    0x0100: 'ImageWidth',
    0x0101: 'ImageHeight',
    0x8769: 'ExifIFDPointer',
    0x8825: 'GPSInfoIFDPointer',
    0xA005: 'InteroperabilityIFDPointer',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x0112: 'Orientation',
    0x0115: 'SamplesPerPixel',
    0x011C: 'PlanarConfiguration',
    0x0212: 'YCbCrSubSampling',
    0x0213: 'YCbCrPositioning',
    0x011A: 'XResolution',
    0x011B: 'YResolution',
    0x0128: 'ResolutionUnit',
    0x0111: 'StripOffsets',
    0x0116: 'RowsPerStrip',
    0x0117: 'StripByteCounts',
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x012D: 'TransferFunction',
    0x013E: 'WhitePoint',
    0x013F: 'PrimaryChromaticities',
    0x0211: 'YCbCrCoefficients',
    0x0214: 'ReferenceBlackWhite',
    0x0132: 'DateTime',
    0x010E: 'ImageDescription',
    0x010F: 'Make',
    0x0110: 'Model',
    0x0131: 'Software',
    0x013B: 'Artist',
    0x8298: 'Copyright',
    // ==================
    // Exif Sub IFD tags:
    // ==================
    0x9000: 'ExifVersion', // EXIF version
    0xA000: 'FlashpixVersion', // Flashpix format version
    0xA001: 'ColorSpace', // Color space information tag
    0xA002: 'PixelXDimension', // Valid width of meaningful image
    0xA003: 'PixelYDimension', // Valid height of meaningful image
    0xA500: 'Gamma',
    0x9101: 'ComponentsConfiguration', // Information about channels
    0x9102: 'CompressedBitsPerPixel', // Compressed bits per pixel
    0x927C: 'MakerNote', // Any desired information written by the manufacturer
    0x9286: 'UserComment', // Comments by user
    0xA004: 'RelatedSoundFile', // Name of related sound file
    0x9003: 'DateTimeOriginal', // Date and time when the original image was generated
    0x9004: 'DateTimeDigitized', // Date and time when the image was stored digitally
    0x9290: 'SubSecTime', // Fractions of seconds for DateTime
    0x9291: 'SubSecTimeOriginal', // Fractions of seconds for DateTimeOriginal
    0x9292: 'SubSecTimeDigitized', // Fractions of seconds for DateTimeDigitized
    0x829A: 'ExposureTime', // Exposure time (in seconds)
    0x829D: 'FNumber',
    0x8822: 'ExposureProgram', // Exposure program
    0x8824: 'SpectralSensitivity', // Spectral sensitivity
    0x8827: 'PhotographicSensitivity', // EXIF 2.3, ISOSpeedRatings in EXIF 2.2
    0x8828: 'OECF', // Optoelectric conversion factor
    0x8830: 'SensitivityType',
    0x8831: 'StandardOutputSensitivity',
    0x8832: 'RecommendedExposureIndex',
    0x8833: 'ISOSpeed',
    0x8834: 'ISOSpeedLatitudeyyy',
    0x8835: 'ISOSpeedLatitudezzz',
    0x9201: 'ShutterSpeedValue', // Shutter speed
    0x9202: 'ApertureValue', // Lens aperture
    0x9203: 'BrightnessValue', // Value of brightness
    0x9204: 'ExposureBias', // Exposure bias
    0x9205: 'MaxApertureValue', // Smallest F number of lens
    0x9206: 'SubjectDistance', // Distance to subject in meters
    0x9207: 'MeteringMode', // Metering mode
    0x9208: 'LightSource', // Kind of light source
    0x9209: 'Flash', // Flash status
    0x9214: 'SubjectArea', // Location and area of main subject
    0x920A: 'FocalLength', // Focal length of the lens in mm
    0xA20B: 'FlashEnergy', // Strobe energy in BCPS
    0xA20C: 'SpatialFrequencyResponse',
    0xA20E: 'FocalPlaneXResolution', // Number of pixels in width direction per FPRUnit
    0xA20F: 'FocalPlaneYResolution', // Number of pixels in height direction per FPRUnit
    0xA210: 'FocalPlaneResolutionUnit', // Unit for measuring the focal plane resolution
    0xA214: 'SubjectLocation', // Location of subject in image
    0xA215: 'ExposureIndex', // Exposure index selected on camera
    0xA217: 'SensingMethod', // Image sensor type
    0xA300: 'FileSource', // Image source (3 == DSC)
    0xA301: 'SceneType', // Scene type (1 == directly photographed)
    0xA302: 'CFAPattern', // Color filter array geometric pattern
    0xA401: 'CustomRendered', // Special processing
    0xA402: 'ExposureMode', // Exposure mode
    0xA403: 'WhiteBalance', // 1 = auto white balance, 2 = manual
    0xA404: 'DigitalZoomRatio', // Digital zoom ratio
    0xA405: 'FocalLengthIn35mmFilm',
    0xA406: 'SceneCaptureType', // Type of scene
    0xA407: 'GainControl', // Degree of overall image gain adjustment
    0xA408: 'Contrast', // Direction of contrast processing applied by camera
    0xA409: 'Saturation', // Direction of saturation processing applied by camera
    0xA40A: 'Sharpness', // Direction of sharpness processing applied by camera
    0xA40B: 'DeviceSettingDescription',
    0xA40C: 'SubjectDistanceRange', // Distance to subject
    0xA420: 'ImageUniqueID', // Identifier assigned uniquely to each image
    0xA430: 'CameraOwnerName',
    0xA431: 'BodySerialNumber',
    0xA432: 'LensSpecification',
    0xA433: 'LensMake',
    0xA434: 'LensModel',
    0xA435: 'LensSerialNumber',
    // ==============
    // GPS Info tags:
    // ==============
    0x0000: 'GPSVersionID',
    0x0001: 'GPSLatitudeRef',
    0x0002: 'GPSLatitude',
    0x0003: 'GPSLongitudeRef',
    0x0004: 'GPSLongitude',
    0x0005: 'GPSAltitudeRef',
    0x0006: 'GPSAltitude',
    0x0007: 'GPSTimeStamp',
    0x0008: 'GPSSatellites',
    0x0009: 'GPSStatus',
    0x000A: 'GPSMeasureMode',
    0x000B: 'GPSDOP',
    0x000C: 'GPSSpeedRef',
    0x000D: 'GPSSpeed',
    0x000E: 'GPSTrackRef',
    0x000F: 'GPSTrack',
    0x0010: 'GPSImgDirectionRef',
    0x0011: 'GPSImgDirection',
    0x0012: 'GPSMapDatum',
    0x0013: 'GPSDestLatitudeRef',
    0x0014: 'GPSDestLatitude',
    0x0015: 'GPSDestLongitudeRef',
    0x0016: 'GPSDestLongitude',
    0x0017: 'GPSDestBearingRef',
    0x0018: 'GPSDestBearing',
    0x0019: 'GPSDestDistanceRef',
    0x001A: 'GPSDestDistance',
    0x001B: 'GPSProcessingMethod',
    0x001C: 'GPSAreaInformation',
    0x001D: 'GPSDateStamp',
    0x001E: 'GPSDifferential',
    0x001F: 'GPSHPositioningError'
  }

  loadImage.ExifMap.prototype.stringValues = {
    ExposureProgram: {
      0: 'Undefined',
      1: 'Manual',
      2: 'Normal program',
      3: 'Aperture priority',
      4: 'Shutter priority',
      5: 'Creative program',
      6: 'Action program',
      7: 'Portrait mode',
      8: 'Landscape mode'
    },
    MeteringMode: {
      0: 'Unknown',
      1: 'Average',
      2: 'CenterWeightedAverage',
      3: 'Spot',
      4: 'MultiSpot',
      5: 'Pattern',
      6: 'Partial',
      255: 'Other'
    },
    LightSource: {
      0: 'Unknown',
      1: 'Daylight',
      2: 'Fluorescent',
      3: 'Tungsten (incandescent light)',
      4: 'Flash',
      9: 'Fine weather',
      10: 'Cloudy weather',
      11: 'Shade',
      12: 'Daylight fluorescent (D 5700 - 7100K)',
      13: 'Day white fluorescent (N 4600 - 5400K)',
      14: 'Cool white fluorescent (W 3900 - 4500K)',
      15: 'White fluorescent (WW 3200 - 3700K)',
      17: 'Standard light A',
      18: 'Standard light B',
      19: 'Standard light C',
      20: 'D55',
      21: 'D65',
      22: 'D75',
      23: 'D50',
      24: 'ISO studio tungsten',
      255: 'Other'
    },
    Flash: {
      0x0000: 'Flash did not fire',
      0x0001: 'Flash fired',
      0x0005: 'Strobe return light not detected',
      0x0007: 'Strobe return light detected',
      0x0009: 'Flash fired, compulsory flash mode',
      0x000D: 'Flash fired, compulsory flash mode, return light not detected',
      0x000F: 'Flash fired, compulsory flash mode, return light detected',
      0x0010: 'Flash did not fire, compulsory flash mode',
      0x0018: 'Flash did not fire, auto mode',
      0x0019: 'Flash fired, auto mode',
      0x001D: 'Flash fired, auto mode, return light not detected',
      0x001F: 'Flash fired, auto mode, return light detected',
      0x0020: 'No flash function',
      0x0041: 'Flash fired, red-eye reduction mode',
      0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
      0x0047: 'Flash fired, red-eye reduction mode, return light detected',
      0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
      0x004D: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
      0x004F: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
      0x0059: 'Flash fired, auto mode, red-eye reduction mode',
      0x005D: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
      0x005F: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
    },
    SensingMethod: {
      1: 'Undefined',
      2: 'One-chip color area sensor',
      3: 'Two-chip color area sensor',
      4: 'Three-chip color area sensor',
      5: 'Color sequential area sensor',
      7: 'Trilinear sensor',
      8: 'Color sequential linear sensor'
    },
    SceneCaptureType: {
      0: 'Standard',
      1: 'Landscape',
      2: 'Portrait',
      3: 'Night scene'
    },
    SceneType: {
      1: 'Directly photographed'
    },
    CustomRendered: {
      0: 'Normal process',
      1: 'Custom process'
    },
    WhiteBalance: {
      0: 'Auto white balance',
      1: 'Manual white balance'
    },
    GainControl: {
      0: 'None',
      1: 'Low gain up',
      2: 'High gain up',
      3: 'Low gain down',
      4: 'High gain down'
    },
    Contrast: {
      0: 'Normal',
      1: 'Soft',
      2: 'Hard'
    },
    Saturation: {
      0: 'Normal',
      1: 'Low saturation',
      2: 'High saturation'
    },
    Sharpness: {
      0: 'Normal',
      1: 'Soft',
      2: 'Hard'
    },
    SubjectDistanceRange: {
      0: 'Unknown',
      1: 'Macro',
      2: 'Close view',
      3: 'Distant view'
    },
    FileSource: {
      3: 'DSC'
    },
    ComponentsConfiguration: {
      0: '',
      1: 'Y',
      2: 'Cb',
      3: 'Cr',
      4: 'R',
      5: 'G',
      6: 'B'
    },
    Orientation: {
      1: 'top-left',
      2: 'top-right',
      3: 'bottom-right',
      4: 'bottom-left',
      5: 'left-top',
      6: 'right-top',
      7: 'right-bottom',
      8: 'left-bottom'
    }
  }

  loadImage.ExifMap.prototype.getText = function (id) {
    var value = this.get(id)
    switch (id) {
      case 'LightSource':
      case 'Flash':
      case 'MeteringMode':
      case 'ExposureProgram':
      case 'SensingMethod':
      case 'SceneCaptureType':
      case 'SceneType':
      case 'CustomRendered':
      case 'WhiteBalance':
      case 'GainControl':
      case 'Contrast':
      case 'Saturation':
      case 'Sharpness':
      case 'SubjectDistanceRange':
      case 'FileSource':
      case 'Orientation':
        return this.stringValues[id][value]
      case 'ExifVersion':
      case 'FlashpixVersion':
        if (!value) return
        return String.fromCharCode(value[0], value[1], value[2], value[3])
      case 'ComponentsConfiguration':
        if (!value) return
        return this.stringValues[id][value[0]] +
        this.stringValues[id][value[1]] +
        this.stringValues[id][value[2]] +
        this.stringValues[id][value[3]]
      case 'GPSVersionID':
        if (!value) return
        return value[0] + '.' + value[1] + '.' + value[2] + '.' + value[3]
    }
    return String(value)
  }

  ;(function (exifMapPrototype) {
    var tags = exifMapPrototype.tags
    var map = exifMapPrototype.map
    var prop
    // Map the tag names to tags:
    for (prop in tags) {
      if (tags.hasOwnProperty(prop)) {
        map[tags[prop]] = prop
      }
    }
  }(loadImage.ExifMap.prototype))

  loadImage.ExifMap.prototype.getAll = function () {
    var map = {}
    var prop
    var id
    for (prop in this) {
      if (this.hasOwnProperty(prop)) {
        id = this.tags[prop]
        if (id) {
          map[id] = this.getText(id)
        }
      }
    }
    return map
  }
}))

},{"./load-image":6,"./load-image-exif":3}],3:[function(require,module,exports){
/*
 * JavaScript Load Image Exif Parser
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*global define, module, require, window, console */

;(function (factory) {
  'use strict'
  if (typeof define === 'function' && define.amd) {
    // Register as an anonymous AMD module:
    define(['./load-image', './load-image-meta'], factory)
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'), require('./load-image-meta'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
}(function (loadImage) {
  'use strict'

  loadImage.ExifMap = function () {
    return this
  }

  loadImage.ExifMap.prototype.map = {
    'Orientation': 0x0112
  }

  loadImage.ExifMap.prototype.get = function (id) {
    return this[id] || this[this.map[id]]
  }

  loadImage.getExifThumbnail = function (dataView, offset, length) {
    var hexData,
      i,
      b
    if (!length || offset + length > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid thumbnail data.')
      return
    }
    hexData = []
    for (i = 0; i < length; i += 1) {
      b = dataView.getUint8(offset + i)
      hexData.push((b < 16 ? '0' : '') + b.toString(16))
    }
    return 'data:image/jpeg,%' + hexData.join('%')
  }

  loadImage.exifTagTypes = {
    // byte, 8-bit unsigned int:
    1: {
      getValue: function (dataView, dataOffset) {
        return dataView.getUint8(dataOffset)
      },
      size: 1
    },
    // ascii, 8-bit byte:
    2: {
      getValue: function (dataView, dataOffset) {
        return String.fromCharCode(dataView.getUint8(dataOffset))
      },
      size: 1,
      ascii: true
    },
    // short, 16 bit int:
    3: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint16(dataOffset, littleEndian)
      },
      size: 2
    },
    // long, 32 bit int:
    4: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint32(dataOffset, littleEndian)
      },
      size: 4
    },
    // rational = two long values, first is numerator, second is denominator:
    5: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint32(dataOffset, littleEndian) /
        dataView.getUint32(dataOffset + 4, littleEndian)
      },
      size: 8
    },
    // slong, 32 bit signed int:
    9: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getInt32(dataOffset, littleEndian)
      },
      size: 4
    },
    // srational, two slongs, first is numerator, second is denominator:
    10: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getInt32(dataOffset, littleEndian) /
        dataView.getInt32(dataOffset + 4, littleEndian)
      },
      size: 8
    }
  }
  // undefined, 8-bit byte, value depending on field:
  loadImage.exifTagTypes[7] = loadImage.exifTagTypes[1]

  loadImage.getExifValue = function (dataView, tiffOffset, offset, type, length, littleEndian) {
    var tagType = loadImage.exifTagTypes[type]
    var tagSize
    var dataOffset
    var values
    var i
    var str
    var c
    if (!tagType) {
      console.log('Invalid Exif data: Invalid tag type.')
      return
    }
    tagSize = tagType.size * length
    // Determine if the value is contained in the dataOffset bytes,
    // or if the value at the dataOffset is a pointer to the actual data:
    dataOffset = tagSize > 4
      ? tiffOffset + dataView.getUint32(offset + 8, littleEndian)
      : (offset + 8)
    if (dataOffset + tagSize > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid data offset.')
      return
    }
    if (length === 1) {
      return tagType.getValue(dataView, dataOffset, littleEndian)
    }
    values = []
    for (i = 0; i < length; i += 1) {
      values[i] = tagType.getValue(dataView, dataOffset + i * tagType.size, littleEndian)
    }
    if (tagType.ascii) {
      str = ''
      // Concatenate the chars:
      for (i = 0; i < values.length; i += 1) {
        c = values[i]
        // Ignore the terminating NULL byte(s):
        if (c === '\u0000') {
          break
        }
        str += c
      }
      return str
    }
    return values
  }

  loadImage.parseExifTag = function (dataView, tiffOffset, offset, littleEndian, data) {
    var tag = dataView.getUint16(offset, littleEndian)
    data.exif[tag] = loadImage.getExifValue(
      dataView,
      tiffOffset,
      offset,
      dataView.getUint16(offset + 2, littleEndian), // tag type
      dataView.getUint32(offset + 4, littleEndian), // tag length
      littleEndian
    )
  }

  loadImage.parseExifTags = function (dataView, tiffOffset, dirOffset, littleEndian, data) {
    var tagsNumber,
      dirEndOffset,
      i
    if (dirOffset + 6 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid directory offset.')
      return
    }
    tagsNumber = dataView.getUint16(dirOffset, littleEndian)
    dirEndOffset = dirOffset + 2 + 12 * tagsNumber
    if (dirEndOffset + 4 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid directory size.')
      return
    }
    for (i = 0; i < tagsNumber; i += 1) {
      this.parseExifTag(
        dataView,
        tiffOffset,
        dirOffset + 2 + 12 * i, // tag offset
        littleEndian,
        data
      )
    }
    // Return the offset to the next directory:
    return dataView.getUint32(dirEndOffset, littleEndian)
  }

  loadImage.parseExifData = function (dataView, offset, length, data, options) {
    if (options.disableExif) {
      return
    }
    var tiffOffset = offset + 10
    var littleEndian
    var dirOffset
    var thumbnailData
    // Check for the ASCII code for "Exif" (0x45786966):
    if (dataView.getUint32(offset + 4) !== 0x45786966) {
      // No Exif data, might be XMP data instead
      return
    }
    if (tiffOffset + 8 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid segment size.')
      return
    }
    // Check for the two null bytes:
    if (dataView.getUint16(offset + 8) !== 0x0000) {
      console.log('Invalid Exif data: Missing byte alignment offset.')
      return
    }
    // Check the byte alignment:
    switch (dataView.getUint16(tiffOffset)) {
      case 0x4949:
        littleEndian = true
        break
      case 0x4D4D:
        littleEndian = false
        break
      default:
        console.log('Invalid Exif data: Invalid byte alignment marker.')
        return
    }
    // Check for the TIFF tag marker (0x002A):
    if (dataView.getUint16(tiffOffset + 2, littleEndian) !== 0x002A) {
      console.log('Invalid Exif data: Missing TIFF marker.')
      return
    }
    // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:
    dirOffset = dataView.getUint32(tiffOffset + 4, littleEndian)
    // Create the exif object to store the tags:
    data.exif = new loadImage.ExifMap()
    // Parse the tags of the main image directory and retrieve the
    // offset to the next directory, usually the thumbnail directory:
    dirOffset = loadImage.parseExifTags(
      dataView,
      tiffOffset,
      tiffOffset + dirOffset,
      littleEndian,
      data
    )
    if (dirOffset && !options.disableExifThumbnail) {
      thumbnailData = {exif: {}}
      dirOffset = loadImage.parseExifTags(
        dataView,
        tiffOffset,
        tiffOffset + dirOffset,
        littleEndian,
        thumbnailData
      )
      // Check for JPEG Thumbnail offset:
      if (thumbnailData.exif[0x0201]) {
        data.exif.Thumbnail = loadImage.getExifThumbnail(
          dataView,
          tiffOffset + thumbnailData.exif[0x0201],
          thumbnailData.exif[0x0202] // Thumbnail data length
        )
      }
    }
    // Check for Exif Sub IFD Pointer:
    if (data.exif[0x8769] && !options.disableExifSub) {
      loadImage.parseExifTags(
        dataView,
        tiffOffset,
        tiffOffset + data.exif[0x8769], // directory offset
        littleEndian,
        data
      )
    }
    // Check for GPS Info IFD Pointer:
    if (data.exif[0x8825] && !options.disableExifGps) {
      loadImage.parseExifTags(
        dataView,
        tiffOffset,
        tiffOffset + data.exif[0x8825], // directory offset
        littleEndian,
        data
      )
    }
  }

  // Registers the Exif parser for the APP1 JPEG meta data segment:
  loadImage.metaDataParsers.jpeg[0xffe1].push(loadImage.parseExifData)

  // Adds the following properties to the parseMetaData callback data:
  // * exif: The exif tags, parsed by the parseExifData method

  // Adds the following options to the parseMetaData method:
  // * disableExif: Disables Exif parsing.
  // * disableExifThumbnail: Disables parsing of the Exif Thumbnail.
  // * disableExifSub: Disables parsing of the Exif Sub IFD.
  // * disableExifGps: Disables parsing of the Exif GPS Info IFD.
}))

},{"./load-image":6,"./load-image-meta":4}],4:[function(require,module,exports){
/*
 * JavaScript Load Image Meta
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Image meta data handling implementation
 * based on the help and contribution of
 * Achim Stöhr.
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*global define, module, require, window, DataView, Blob, Uint8Array, console */

;(function (factory) {
  'use strict'
  if (typeof define === 'function' && define.amd) {
    // Register as an anonymous AMD module:
    define(['./load-image'], factory)
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
}(function (loadImage) {
  'use strict'

  var hasblobSlice = window.Blob && (Blob.prototype.slice ||
  Blob.prototype.webkitSlice || Blob.prototype.mozSlice)

  loadImage.blobSlice = hasblobSlice && function () {
    var slice = this.slice || this.webkitSlice || this.mozSlice
    return slice.apply(this, arguments)
  }

  loadImage.metaDataParsers = {
    jpeg: {
      0xffe1: [] // APP1 marker
    }
  }

  // Parses image meta data and calls the callback with an object argument
  // with the following properties:
  // * imageHead: The complete image head as ArrayBuffer (Uint8Array for IE10)
  // The options arguments accepts an object and supports the following properties:
  // * maxMetaDataSize: Defines the maximum number of bytes to parse.
  // * disableImageHead: Disables creating the imageHead property.
  loadImage.parseMetaData = function (file, callback, options) {
    options = options || {}
    var that = this
    // 256 KiB should contain all EXIF/ICC/IPTC segments:
    var maxMetaDataSize = options.maxMetaDataSize || 262144
    var data = {}
    var noMetaData = !(window.DataView && file && file.size >= 12 &&
                      file.type === 'image/jpeg' && loadImage.blobSlice)
    if (noMetaData || !loadImage.readFile(
        loadImage.blobSlice.call(file, 0, maxMetaDataSize),
        function (e) {
          if (e.target.error) {
            // FileReader error
            console.log(e.target.error)
            callback(data)
            return
          }
          // Note on endianness:
          // Since the marker and length bytes in JPEG files are always
          // stored in big endian order, we can leave the endian parameter
          // of the DataView methods undefined, defaulting to big endian.
          var buffer = e.target.result
          var dataView = new DataView(buffer)
          var offset = 2
          var maxOffset = dataView.byteLength - 4
          var headLength = offset
          var markerBytes
          var markerLength
          var parsers
          var i
          // Check for the JPEG marker (0xffd8):
          if (dataView.getUint16(0) === 0xffd8) {
            while (offset < maxOffset) {
              markerBytes = dataView.getUint16(offset)
              // Search for APPn (0xffeN) and COM (0xfffe) markers,
              // which contain application-specific meta-data like
              // Exif, ICC and IPTC data and text comments:
              if ((markerBytes >= 0xffe0 && markerBytes <= 0xffef) ||
                markerBytes === 0xfffe) {
                // The marker bytes (2) are always followed by
                // the length bytes (2), indicating the length of the
                // marker segment, which includes the length bytes,
                // but not the marker bytes, so we add 2:
                markerLength = dataView.getUint16(offset + 2) + 2
                if (offset + markerLength > dataView.byteLength) {
                  console.log('Invalid meta data: Invalid segment size.')
                  break
                }
                parsers = loadImage.metaDataParsers.jpeg[markerBytes]
                if (parsers) {
                  for (i = 0; i < parsers.length; i += 1) {
                    parsers[i].call(
                      that,
                      dataView,
                      offset,
                      markerLength,
                      data,
                      options
                    )
                  }
                }
                offset += markerLength
                headLength = offset
              } else {
                // Not an APPn or COM marker, probably safe to
                // assume that this is the end of the meta data
                break
              }
            }
            // Meta length must be longer than JPEG marker (2)
            // plus APPn marker (2), followed by length bytes (2):
            if (!options.disableImageHead && headLength > 6) {
              if (buffer.slice) {
                data.imageHead = buffer.slice(0, headLength)
              } else {
                // Workaround for IE10, which does not yet
                // support ArrayBuffer.slice:
                data.imageHead = new Uint8Array(buffer)
                  .subarray(0, headLength)
              }
            }
          } else {
            console.log('Invalid JPEG file: Missing JPEG marker.')
          }
          callback(data)
        },
        'readAsArrayBuffer'
      )) {
      callback(data)
    }
  }
}))

},{"./load-image":6}],5:[function(require,module,exports){
/*
 * JavaScript Load Image Orientation
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*global define, module, require, window */

;(function (factory) {
  'use strict'
  if (typeof define === 'function' && define.amd) {
    // Register as an anonymous AMD module:
    define(['./load-image'], factory)
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
}(function (loadImage) {
  'use strict'

  var originalHasCanvasOption = loadImage.hasCanvasOption
  var originalTransformCoordinates = loadImage.transformCoordinates
  var originalGetTransformedOptions = loadImage.getTransformedOptions

  // This method is used to determine if the target image
  // should be a canvas element:
  loadImage.hasCanvasOption = function (options) {
    return !!options.orientation ||
      originalHasCanvasOption.call(loadImage, options)
  }

  // Transform image orientation based on
  // the given EXIF orientation option:
  loadImage.transformCoordinates = function (canvas, options) {
    originalTransformCoordinates.call(loadImage, canvas, options)
    var ctx = canvas.getContext('2d')
    var width = canvas.width
    var height = canvas.height
    var styleWidth = canvas.style.width
    var styleHeight = canvas.style.height
    var orientation = options.orientation
    if (!orientation || orientation > 8) {
      return
    }
    if (orientation > 4) {
      canvas.width = height
      canvas.height = width
      canvas.style.width = styleHeight
      canvas.style.height = styleWidth
    }
    switch (orientation) {
      case 2:
        // horizontal flip
        ctx.translate(width, 0)
        ctx.scale(-1, 1)
        break
      case 3:
        // 180° rotate left
        ctx.translate(width, height)
        ctx.rotate(Math.PI)
        break
      case 4:
        // vertical flip
        ctx.translate(0, height)
        ctx.scale(1, -1)
        break
      case 5:
        // vertical flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI)
        ctx.scale(1, -1)
        break
      case 6:
        // 90° rotate right
        ctx.rotate(0.5 * Math.PI)
        ctx.translate(0, -height)
        break
      case 7:
        // horizontal flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI)
        ctx.translate(width, -height)
        ctx.scale(-1, 1)
        break
      case 8:
        // 90° rotate left
        ctx.rotate(-0.5 * Math.PI)
        ctx.translate(-width, 0)
        break
    }
  }

  // Transforms coordinate and dimension options
  // based on the given orientation option:
  loadImage.getTransformedOptions = function (img, opts) {
    var options = originalGetTransformedOptions.call(loadImage, img, opts)
    var orientation = options.orientation
    var newOptions
    var i
    if (!orientation || orientation > 8 || orientation === 1) {
      return options
    }
    newOptions = {}
    for (i in options) {
      if (options.hasOwnProperty(i)) {
        newOptions[i] = options[i]
      }
    }
    switch (options.orientation) {
      case 2:
        // horizontal flip
        newOptions.left = options.right
        newOptions.right = options.left
        break
      case 3:
        // 180° rotate left
        newOptions.left = options.right
        newOptions.top = options.bottom
        newOptions.right = options.left
        newOptions.bottom = options.top
        break
      case 4:
        // vertical flip
        newOptions.top = options.bottom
        newOptions.bottom = options.top
        break
      case 5:
        // vertical flip + 90 rotate right
        newOptions.left = options.top
        newOptions.top = options.left
        newOptions.right = options.bottom
        newOptions.bottom = options.right
        break
      case 6:
        // 90° rotate right
        newOptions.left = options.top
        newOptions.top = options.right
        newOptions.right = options.bottom
        newOptions.bottom = options.left
        break
      case 7:
        // horizontal flip + 90 rotate right
        newOptions.left = options.bottom
        newOptions.top = options.right
        newOptions.right = options.top
        newOptions.bottom = options.left
        break
      case 8:
        // 90° rotate left
        newOptions.left = options.bottom
        newOptions.top = options.left
        newOptions.right = options.top
        newOptions.bottom = options.right
        break
    }
    if (options.orientation > 4) {
      newOptions.maxWidth = options.maxHeight
      newOptions.maxHeight = options.maxWidth
      newOptions.minWidth = options.minHeight
      newOptions.minHeight = options.minWidth
      newOptions.sourceWidth = options.sourceHeight
      newOptions.sourceHeight = options.sourceWidth
    }
    return newOptions
  }
}))

},{"./load-image":6}],6:[function(require,module,exports){
/*
 * JavaScript Load Image
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*global define, module, window, document, URL, webkitURL, FileReader */

;(function ($) {
  'use strict'

  // Loads an image for a given File object.
  // Invokes the callback with an img or optional canvas
  // element (if supported by the browser) as parameter:
  var loadImage = function (file, callback, options) {
    var img = document.createElement('img')
    var url
    var oUrl
    img.onerror = callback
    img.onload = function () {
      if (oUrl && !(options && options.noRevoke)) {
        loadImage.revokeObjectURL(oUrl)
      }
      if (callback) {
        callback(loadImage.scale(img, options))
      }
    }
    if (loadImage.isInstanceOf('Blob', file) ||
      // Files are also Blob instances, but some browsers
      // (Firefox 3.6) support the File API but not Blobs:
      loadImage.isInstanceOf('File', file)) {
      url = oUrl = loadImage.createObjectURL(file)
      // Store the file type for resize processing:
      img._type = file.type
    } else if (typeof file === 'string') {
      url = file
      if (options && options.crossOrigin) {
        img.crossOrigin = options.crossOrigin
      }
    } else {
      return false
    }
    if (url) {
      img.src = url
      return img
    }
    return loadImage.readFile(file, function (e) {
      var target = e.target
      if (target && target.result) {
        img.src = target.result
      } else {
        if (callback) {
          callback(e)
        }
      }
    })
  }
  // The check for URL.revokeObjectURL fixes an issue with Opera 12,
  // which provides URL.createObjectURL but doesn't properly implement it:
  var urlAPI = (window.createObjectURL && window) ||
                (window.URL && URL.revokeObjectURL && URL) ||
                (window.webkitURL && webkitURL)

  loadImage.isInstanceOf = function (type, obj) {
    // Cross-frame instanceof check
    return Object.prototype.toString.call(obj) === '[object ' + type + ']'
  }

  // Transform image coordinates, allows to override e.g.
  // the canvas orientation based on the orientation option,
  // gets canvas, options passed as arguments:
  loadImage.transformCoordinates = function () {
    return
  }

  // Returns transformed options, allows to override e.g.
  // maxWidth, maxHeight and crop options based on the aspectRatio.
  // gets img, options passed as arguments:
  loadImage.getTransformedOptions = function (img, options) {
    var aspectRatio = options.aspectRatio
    var newOptions
    var i
    var width
    var height
    if (!aspectRatio) {
      return options
    }
    newOptions = {}
    for (i in options) {
      if (options.hasOwnProperty(i)) {
        newOptions[i] = options[i]
      }
    }
    newOptions.crop = true
    width = img.naturalWidth || img.width
    height = img.naturalHeight || img.height
    if (width / height > aspectRatio) {
      newOptions.maxWidth = height * aspectRatio
      newOptions.maxHeight = height
    } else {
      newOptions.maxWidth = width
      newOptions.maxHeight = width / aspectRatio
    }
    return newOptions
  }

  // Canvas render method, allows to implement a different rendering algorithm:
  loadImage.renderImageToCanvas = function (
    canvas,
    img,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    destX,
    destY,
    destWidth,
    destHeight
  ) {
    canvas.getContext('2d').drawImage(
      img,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      destX,
      destY,
      destWidth,
      destHeight
    )
    return canvas
  }

  // This method is used to determine if the target image
  // should be a canvas element:
  loadImage.hasCanvasOption = function (options) {
    return options.canvas || options.crop || !!options.aspectRatio
  }

  // Scales and/or crops the given image (img or canvas HTML element)
  // using the given options.
  // Returns a canvas object if the browser supports canvas
  // and the hasCanvasOption method returns true or a canvas
  // object is passed as image, else the scaled image:
  loadImage.scale = function (img, options) {
    options = options || {}
    var canvas = document.createElement('canvas')
    var useCanvas = img.getContext ||
                    (loadImage.hasCanvasOption(options) && canvas.getContext)
    var width = img.naturalWidth || img.width
    var height = img.naturalHeight || img.height
    var destWidth = width
    var destHeight = height
    var maxWidth
    var maxHeight
    var minWidth
    var minHeight
    var sourceWidth
    var sourceHeight
    var sourceX
    var sourceY
    var pixelRatio
    var downsamplingRatio
    var tmp
    function scaleUp () {
      var scale = Math.max(
        (minWidth || destWidth) / destWidth,
        (minHeight || destHeight) / destHeight
      )
      if (scale > 1) {
        destWidth *= scale
        destHeight *= scale
      }
    }
    function scaleDown () {
      var scale = Math.min(
        (maxWidth || destWidth) / destWidth,
        (maxHeight || destHeight) / destHeight
      )
      if (scale < 1) {
        destWidth *= scale
        destHeight *= scale
      }
    }
    if (useCanvas) {
      options = loadImage.getTransformedOptions(img, options)
      sourceX = options.left || 0
      sourceY = options.top || 0
      if (options.sourceWidth) {
        sourceWidth = options.sourceWidth
        if (options.right !== undefined && options.left === undefined) {
          sourceX = width - sourceWidth - options.right
        }
      } else {
        sourceWidth = width - sourceX - (options.right || 0)
      }
      if (options.sourceHeight) {
        sourceHeight = options.sourceHeight
        if (options.bottom !== undefined && options.top === undefined) {
          sourceY = height - sourceHeight - options.bottom
        }
      } else {
        sourceHeight = height - sourceY - (options.bottom || 0)
      }
      destWidth = sourceWidth
      destHeight = sourceHeight
    }
    maxWidth = options.maxWidth
    maxHeight = options.maxHeight
    minWidth = options.minWidth
    minHeight = options.minHeight
    if (useCanvas && maxWidth && maxHeight && options.crop) {
      destWidth = maxWidth
      destHeight = maxHeight
      tmp = sourceWidth / sourceHeight - maxWidth / maxHeight
      if (tmp < 0) {
        sourceHeight = maxHeight * sourceWidth / maxWidth
        if (options.top === undefined && options.bottom === undefined) {
          sourceY = (height - sourceHeight) / 2
        }
      } else if (tmp > 0) {
        sourceWidth = maxWidth * sourceHeight / maxHeight
        if (options.left === undefined && options.right === undefined) {
          sourceX = (width - sourceWidth) / 2
        }
      }
    } else {
      if (options.contain || options.cover) {
        minWidth = maxWidth = maxWidth || minWidth
        minHeight = maxHeight = maxHeight || minHeight
      }
      if (options.cover) {
        scaleDown()
        scaleUp()
      } else {
        scaleUp()
        scaleDown()
      }
    }
    if (useCanvas) {
      pixelRatio = options.pixelRatio
      if (pixelRatio > 1) {
        canvas.style.width = destWidth + 'px'
        canvas.style.height = destHeight + 'px'
        destWidth *= pixelRatio
        destHeight *= pixelRatio
        canvas.getContext('2d').scale(pixelRatio, pixelRatio)
      }
      downsamplingRatio = options.downsamplingRatio
      if (downsamplingRatio > 0 && downsamplingRatio < 1 &&
            destWidth < sourceWidth && destHeight < sourceHeight) {
        while (sourceWidth * downsamplingRatio > destWidth) {
          canvas.width = sourceWidth * downsamplingRatio
          canvas.height = sourceHeight * downsamplingRatio
          loadImage.renderImageToCanvas(
            canvas,
            img,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            0,
            0,
            canvas.width,
            canvas.height
          )
          sourceWidth = canvas.width
          sourceHeight = canvas.height
          img = document.createElement('canvas')
          img.width = sourceWidth
          img.height = sourceHeight
          loadImage.renderImageToCanvas(
            img,
            canvas,
            0,
            0,
            sourceWidth,
            sourceHeight,
            0,
            0,
            sourceWidth,
            sourceHeight
          )
        }
      }
      canvas.width = destWidth
      canvas.height = destHeight
      loadImage.transformCoordinates(
        canvas,
        options
      )
      return loadImage.renderImageToCanvas(
        canvas,
        img,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        0,
        0,
        destWidth,
        destHeight
      )
    }
    img.width = destWidth
    img.height = destHeight
    return img
  }

  loadImage.createObjectURL = function (file) {
    return urlAPI ? urlAPI.createObjectURL(file) : false
  }

  loadImage.revokeObjectURL = function (url) {
    return urlAPI ? urlAPI.revokeObjectURL(url) : false
  }

  // Loads a given File object via FileReader interface,
  // invokes the callback with the event object (load or error).
  // The result can be read via event.target.result:
  loadImage.readFile = function (file, callback, method) {
    if (window.FileReader) {
      var fileReader = new FileReader()
      fileReader.onload = fileReader.onerror = callback
      method = method || 'readAsDataURL'
      if (fileReader[method]) {
        fileReader[method](file)
        return fileReader
      }
    }
    return false
  }

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return loadImage
    })
  } else if (typeof module === 'object' && module.exports) {
    module.exports = loadImage
  } else {
    $.loadImage = loadImage
  }
}(window))

},{}],7:[function(require,module,exports){

/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
var Dropzone, Emitter, LoadImage, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
  slice = [].slice,
  extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

LoadImage = require('blueimp-load-image');

noop = function() {};

Emitter = (function() {
  function Emitter() {}

  Emitter.prototype.addEventListener = Emitter.prototype.on;

  Emitter.prototype.on = function(event, fn) {
    this._callbacks = this._callbacks || {};
    if (!this._callbacks[event]) {
      this._callbacks[event] = [];
    }
    this._callbacks[event].push(fn);
    return this;
  };

  Emitter.prototype.emit = function() {
    var args, callback, callbacks, event, j, len;
    event = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    this._callbacks = this._callbacks || {};
    callbacks = this._callbacks[event];
    if (callbacks) {
      for (j = 0, len = callbacks.length; j < len; j++) {
        callback = callbacks[j];
        callback.apply(this, args);
      }
    }
    return this;
  };

  Emitter.prototype.removeListener = Emitter.prototype.off;

  Emitter.prototype.removeAllListeners = Emitter.prototype.off;

  Emitter.prototype.removeEventListener = Emitter.prototype.off;

  Emitter.prototype.off = function(event, fn) {
    var callback, callbacks, i, j, len;
    if (!this._callbacks || arguments.length === 0) {
      this._callbacks = {};
      return this;
    }
    callbacks = this._callbacks[event];
    if (!callbacks) {
      return this;
    }
    if (arguments.length === 1) {
      delete this._callbacks[event];
      return this;
    }
    for (i = j = 0, len = callbacks.length; j < len; i = ++j) {
      callback = callbacks[i];
      if (callback === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }
    return this;
  };

  return Emitter;

})();

Dropzone = (function(superClass) {
  var extend, resolveOption;

  extend1(Dropzone, superClass);

  Dropzone.prototype.Emitter = Emitter;


  /*
  This is a list of all available events you can register on a dropzone object.
  
  You can register an event handler like this:
  
      dropzone.on("dragEnter", function() { });
   */

  Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "autoretry", "reject", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

  Dropzone.prototype.defaultOptions = {
    url: null,
    method: "post",
    withCredentials: false,
    parallelUploads: 5,
    uploadAttempts: 3,
    uploadMultiple: false,
    maxFilesize: 100,
    maxImageSize: 50,
    paramName: "file",
    createImageThumbnails: true,
    maxThumbnailFilesize: 10,
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    filesizeBase: 1000,
    maxFiles: null,
    params: {},
    clickable: true,
    ignoreHiddenFiles: true,
    acceptedFiles: null,
    acceptedMimeTypes: null,
    autoProcessQueue: true,
    autoQueue: true,
    addRemoveLinks: false,
    previewsContainer: null,
    hiddenInputContainer: "body",
    capture: null,
    renameFilename: null,
    dictDefaultMessage: "Drop your image files or folders here (or click to choose them)",
    dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
    dictFallbackText: "Please use the fallback form below to upload your files.",
    dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
    dictInvalidFileType: "You can't upload files of this type.",
    dictResponseError: "Server responded with {{statusCode}} code.",
    dictCancelUpload: "Cancel upload",
    dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
    dictRemoveFile: "Remove file",
    dictRemoveFileConfirmation: null,
    dictMaxFilesExceeded: "You can not upload any more files.",
    dictMaxImageSizeExceeded: "The image exceeds the maximum allowed resolution of {{maxImageSize}} megapixels.",
    accept: function(file, done) {
      return done();
    },
    init: function() {
      return noop;
    },
    forceFallback: false,
    fallback: function() {
      var child, j, len, messageElement, ref, span;
      this.element.className = this.element.className + " dz-browser-not-supported";
      ref = this.element.getElementsByTagName("div");
      for (j = 0, len = ref.length; j < len; j++) {
        child = ref[j];
        if (/(^| )dz-message($| )/.test(child.className)) {
          messageElement = child;
          child.className = "dz-message";
          continue;
        }
      }
      if (!messageElement) {
        messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
        this.element.appendChild(messageElement);
      }
      span = messageElement.getElementsByTagName("span")[0];
      if (span) {
        if (span.textContent != null) {
          span.textContent = this.options.dictFallbackMessage;
        } else if (span.innerText != null) {
          span.innerText = this.options.dictFallbackMessage;
        }
      }
      return this.element.appendChild(this.getFallbackForm());
    },
    resize: function(file) {
      var info, srcRatio, trgRatio;
      info = {
        srcX: 0,
        srcY: 0,
        srcWidth: file.width,
        srcHeight: file.height
      };
      srcRatio = file.width / file.height;
      info.optWidth = this.options.thumbnailWidth;
      info.optHeight = this.options.thumbnailHeight;
      if ((info.optWidth == null) && (info.optHeight == null)) {
        info.optWidth = info.srcWidth;
        info.optHeight = info.srcHeight;
      } else if (info.optWidth == null) {
        info.optWidth = srcRatio * info.optHeight;
      } else if (info.optHeight == null) {
        info.optHeight = (1 / srcRatio) * info.optWidth;
      }
      trgRatio = info.optWidth / info.optHeight;
      if (file.height < info.optHeight || file.width < info.optWidth) {
        info.trgHeight = info.srcHeight;
        info.trgWidth = info.srcWidth;
      } else {
        if (srcRatio > trgRatio) {
          info.srcHeight = file.height;
          info.srcWidth = info.srcHeight * trgRatio;
        } else {
          info.srcWidth = file.width;
          info.srcHeight = info.srcWidth / trgRatio;
        }
      }
      info.srcX = (file.width - info.srcWidth) / 2;
      info.srcY = (file.height - info.srcHeight) / 2;
      return info;
    },

    /*
    Those functions register themselves to the events on init and handle all
    the user interface specific stuff. Overwriting them won't break the upload
    but can break the way it's displayed.
    You can overwrite them if you don't like the default behavior. If you just
    want to add an additional event handler, register it on the dropzone object
    and don't overwrite those options.
     */
    drop: function(e) {
      return this.element.classList.remove("dz-drag-hover");
    },
    dragstart: noop,
    dragend: function(e) {
      return this.element.classList.remove("dz-drag-hover");
    },
    dragenter: function(e) {
      return this.element.classList.add("dz-drag-hover");
    },
    dragover: function(e) {
      return this.element.classList.add("dz-drag-hover");
    },
    dragleave: function(e) {
      return this.element.classList.remove("dz-drag-hover");
    },
    paste: noop,
    reset: function() {
      return this.element.classList.remove("dz-started");
    },
    addedfile: function(file) {
      var j, k, l, len, len1, len2, node, ref, ref1, ref2, removeFileEvent, removeLink, results;
      if (this.element === this.previewsContainer) {
        this.element.classList.add("dz-started");
      }
      if (this.previewsContainer) {
        file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
        file.previewTemplate = file.previewElement;
        this.previewsContainer.appendChild(file.previewElement);
        ref = file.previewElement.querySelectorAll("[data-dz-name]");
        for (j = 0, len = ref.length; j < len; j++) {
          node = ref[j];
          node.textContent = this._renameFilename(file.name, file);
        }
        ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
        for (k = 0, len1 = ref1.length; k < len1; k++) {
          node = ref1[k];
          node.innerHTML = this.filesize(file.size);
        }
        if (this.options.addRemoveLinks) {
          file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
          file.previewElement.appendChild(file._removeLink);
        }
        removeFileEvent = (function(_this) {
          return function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (file.status === Dropzone.UPLOADING) {
              return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                return _this.removeFile(file);
              });
            } else {
              if (_this.options.dictRemoveFileConfirmation) {
                return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                  return _this.removeFile(file);
                });
              } else {
                return _this.removeFile(file);
              }
            }
          };
        })(this);
        ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
        results = [];
        for (l = 0, len2 = ref2.length; l < len2; l++) {
          removeLink = ref2[l];
          results.push(removeLink.addEventListener("click", removeFileEvent));
        }
        return results;
      }
    },
    removedfile: function(file) {
      var ref;
      if (file.previewElement) {
        if ((ref = file.previewElement) != null) {
          ref.parentNode.removeChild(file.previewElement);
        }
      }
      return this._updateMaxFilesReachedClass();
    },
    thumbnail: function(file, dataUrl) {
      var j, len, ref, thumbnailElement;
      if (file.previewElement) {
        file.previewElement.classList.remove("dz-file-preview");
        ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
        for (j = 0, len = ref.length; j < len; j++) {
          thumbnailElement = ref[j];
          thumbnailElement.alt = file.name;
          thumbnailElement.src = dataUrl;
        }
        return setTimeout(((function(_this) {
          return function() {
            return file.previewElement.classList.add("dz-image-preview");
          };
        })(this)), 1);
      }
    },
    autoretry: noop,
    reject: noop,
    error: function(file, message) {
      var j, len, node, ref, results;
      if (file.previewElement) {
        file.previewElement.classList.add("dz-error");
        if (typeof message !== "String" && message.error) {
          message = message.error;
        }
        ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          node = ref[j];
          results.push(node.textContent = message);
        }
        return results;
      }
    },
    errormultiple: noop,
    processing: function(file) {
      if (file.previewElement) {
        file.previewElement.classList.add("dz-processing");
        if (file._removeLink) {
          return file._removeLink.textContent = this.options.dictCancelUpload;
        }
      }
    },
    processingmultiple: noop,
    uploadprogress: function(file, progress, bytesSent) {
      var j, k, len, len1, node, ref, ref1, results;
      if (file.previewElement) {
        ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
        for (j = 0, len = ref.length; j < len; j++) {
          node = ref[j];
          if (node.nodeName === 'PROGRESS') {
            node.value = progress;
          } else {
            node.style.width = progress + "%";
          }
        }
        ref1 = file.previewElement.querySelectorAll("[data-dz-uploadprogress-percent]");
        results = [];
        for (k = 0, len1 = ref1.length; k < len1; k++) {
          node = ref1[k];
          results.push(node.textContent = Math.floor(progress));
        }
        return results;
      }
    },
    totaluploadprogress: noop,
    sending: noop,
    sendingmultiple: noop,
    success: function(file) {
      if (file.previewElement) {
        return file.previewElement.classList.add("dz-success");
      }
    },
    successmultiple: noop,
    canceled: function(file) {
      return this.emit("error", file, "Upload canceled.");
    },
    canceledmultiple: noop,
    complete: function(file) {
      if (file._removeLink) {
        file._removeLink.textContent = this.options.dictRemoveFile;
      }
      if (file.previewElement) {
        return file.previewElement.classList.add("dz-complete");
      }
    },
    completemultiple: noop,
    maxfilesexceeded: noop,
    maxfilesreached: noop,
    queuecomplete: noop,
    addedfiles: noop,
    previewTemplate: "  <div class=\"dz-preview dz-file-preview\">\n    <div class=\"dz-details\">\n        <div class=\"dz-image\">\n            <img data-dz-thumbnail />\n            <div class=\"dz-thumbnail-icon\"><i class=\"fa fa-file-image-o fa-2x\"></i></div>\n        </div>\n    </div>\n    <div class=\"dz-details-overlay\">\n    <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n        <div class=\"dz-error-mark\"><i class=\"fa fa-exclamation-triangle\"></i></div> \n    </div>\n    <div class=\"dz-details-popup\">\n        <table>\n            <tr>\n                <td>Filename</td>\n                <td class=\"dz-filename\" data-dz-name></td>\n            </tr>\n            <tr>\n                <td>Size</td>\n                <td class=\"dz-size\" data-dz-size></td>\n            </tr>\n            <tr>\n                <td>Status</td>\n                <td>\n                    <div class=\"dz-progress\" class=\"non-break\">Uploading...&nbsp;<span data-dz-uploadprogress-percent>0</span>%</div>\n                    <div class=\"dz-success-mark\">File uploaded successfully</div>\n                    <div class=\"dz-error-message\">Error:&nbsp;<span data-dz-errormessage></span></div>\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>"
  };

  extend = function() {
    var j, key, len, object, objects, target, val;
    target = arguments[0], objects = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    for (j = 0, len = objects.length; j < len; j++) {
      object = objects[j];
      for (key in object) {
        val = object[key];
        target[key] = val;
      }
    }
    return target;
  };

  function Dropzone(element1, options) {
    var elementOptions, fallback, ref;
    this.element = element1;
    this.version = Dropzone.version;
    this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
    this.clickableElements = [];
    this.listeners = [];
    this.files = [];
    if (typeof this.element === "string") {
      this.element = document.querySelector(this.element);
    }
    if (!(this.element && (this.element.nodeType != null))) {
      throw new Error("Invalid dropzone element.");
    }
    if (this.element.dropzone) {
      throw new Error("Dropzone already attached.");
    }
    Dropzone.instances.push(this);
    this.element.dropzone = this;
    elementOptions = (ref = Dropzone.optionsForElement(this.element)) != null ? ref : {};
    this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
    if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
      return this.options.fallback.call(this);
    }
    if (this.options.url == null) {
      this.options.url = this.element.getAttribute("action");
    }
    if (!this.options.url) {
      throw new Error("No URL provided.");
    }
    if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
      throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    }
    if (this.options.acceptedMimeTypes) {
      this.options.acceptedFiles = this.options.acceptedMimeTypes;
      delete this.options.acceptedMimeTypes;
    }
    this.options.method = this.options.method.toUpperCase();
    if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
      fallback.parentNode.removeChild(fallback);
    }
    if (this.options.previewsContainer !== false) {
      if (this.options.previewsContainer) {
        this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
      } else {
        this.previewsContainer = this.element;
      }
    }
    if (this.options.clickable) {
      if (this.options.clickable === true) {
        this.clickableElements = [this.element];
      } else {
        this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
      }
    }
    this.init();
  }

  Dropzone.prototype.getAcceptedFiles = function() {
    var file, j, len, ref, results;
    ref = this.files;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      file = ref[j];
      if (file.accepted) {
        results.push(file);
      }
    }
    return results;
  };

  Dropzone.prototype.getRejectedFiles = function() {
    var file, j, len, ref, results;
    ref = this.files;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      file = ref[j];
      if (!file.accepted) {
        results.push(file);
      }
    }
    return results;
  };

  Dropzone.prototype.getFilesWithStatus = function(status) {
    var file, j, len, ref, results;
    ref = this.files;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      file = ref[j];
      if (file.status === status) {
        results.push(file);
      }
    }
    return results;
  };

  Dropzone.prototype.getQueuedFiles = function() {
    return this.getFilesWithStatus(Dropzone.QUEUED);
  };

  Dropzone.prototype.getUploadingFiles = function() {
    return this.getFilesWithStatus(Dropzone.UPLOADING);
  };

  Dropzone.prototype.getAddedFiles = function() {
    return this.getFilesWithStatus(Dropzone.ADDED);
  };

  Dropzone.prototype.getActiveFiles = function() {
    var file, j, len, ref, results;
    ref = this.files;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      file = ref[j];
      if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
        results.push(file);
      }
    }
    return results;
  };

  Dropzone.prototype.init = function() {
    var eventName, j, len, noPropagation, ref, ref1, setupHiddenFileInput;
    if (this.element.tagName === "form") {
      this.element.setAttribute("enctype", "multipart/form-data");
    }
    if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
      this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
    }
    if (this.clickableElements.length) {
      setupHiddenFileInput = (function(_this) {
        return function() {
          if (_this.hiddenFileInput) {
            _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
          }
          _this.hiddenFileInput = document.createElement("input");
          _this.hiddenFileInput.setAttribute("type", "file");
          if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
            _this.hiddenFileInput.setAttribute("multiple", "multiple");
          }
          _this.hiddenFileInput.className = "dz-hidden-input";
          if (_this.options.acceptedFiles != null) {
            _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
          }
          if (_this.options.capture != null) {
            _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
          }
          _this.hiddenFileInput.style.visibility = "hidden";
          _this.hiddenFileInput.style.position = "absolute";
          _this.hiddenFileInput.style.top = "0";
          _this.hiddenFileInput.style.left = "0";
          _this.hiddenFileInput.style.height = "0";
          _this.hiddenFileInput.style.width = "0";
          document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
          return _this.hiddenFileInput.addEventListener("change", function() {
            var file, files, filesBefore, j, len;
            files = _this.hiddenFileInput.files;
            filesBefore = _this.files.length;
            if (files.length) {
              for (j = 0, len = files.length; j < len; j++) {
                file = files[j];
                _this.addFile(file);
              }
            }
            if (_this.files.length > filesBefore) {
              _this.emit("addedfiles", files);
            }
            return setupHiddenFileInput();
          });
        };
      })(this);
      setupHiddenFileInput();
    }
    this.URL = (ref = window.URL) != null ? ref : window.webkitURL;
    ref1 = this.events;
    for (j = 0, len = ref1.length; j < len; j++) {
      eventName = ref1[j];
      this.on(eventName, this.options[eventName]);
    }
    this.on("uploadprogress", (function(_this) {
      return function() {
        return _this.updateTotalUploadProgress();
      };
    })(this));
    this.on("removedfile", (function(_this) {
      return function() {
        return _this.updateTotalUploadProgress();
      };
    })(this));
    this.on("canceled", (function(_this) {
      return function(file) {
        return _this.emit("complete", file);
      };
    })(this));
    this.on("complete", (function(_this) {
      return function(file) {
        if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
          return setTimeout((function() {
            return _this.emit("queuecomplete");
          }), 0);
        }
      };
    })(this));
    noPropagation = function(e) {
      e.stopPropagation();
      if (e.preventDefault) {
        return e.preventDefault();
      } else {
        return e.returnValue = false;
      }
    };
    this.listeners = [
      {
        element: this.element,
        events: {
          "dragstart": (function(_this) {
            return function(e) {
              return _this.emit("dragstart", e);
            };
          })(this),
          "dragenter": (function(_this) {
            return function(e) {
              noPropagation(e);
              return _this.emit("dragenter", e);
            };
          })(this),
          "dragover": (function(_this) {
            return function(e) {
              var efct;
              try {
                efct = e.dataTransfer.effectAllowed;
              } catch (error1) {}
              e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
              noPropagation(e);
              return _this.emit("dragover", e);
            };
          })(this),
          "dragleave": (function(_this) {
            return function(e) {
              return _this.emit("dragleave", e);
            };
          })(this),
          "drop": (function(_this) {
            return function(e) {
              noPropagation(e);
              return _this.drop(e);
            };
          })(this),
          "dragend": (function(_this) {
            return function(e) {
              return _this.emit("dragend", e);
            };
          })(this)
        }
      }
    ];
    this.clickableElements.forEach((function(_this) {
      return function(clickableElement) {
        return _this.listeners.push({
          element: clickableElement,
          events: {
            "click": function(evt) {
              if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                _this.hiddenFileInput.click();
              }
              return true;
            }
          }
        });
      };
    })(this));
    this.enable();
    return this.options.init.call(this);
  };

  Dropzone.prototype.destroy = function() {
    var ref;
    this.disable();
    this.removeAllFiles(true);
    if ((ref = this.hiddenFileInput) != null ? ref.parentNode : void 0) {
      this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
      this.hiddenFileInput = null;
    }
    delete this.element.dropzone;
    return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
  };

  Dropzone.prototype.updateTotalUploadProgress = function() {
    var activeFiles, file, j, len, ref, totalBytes, totalBytesSent, totalUploadProgress;
    totalBytesSent = 0;
    totalBytes = 0;
    activeFiles = this.getActiveFiles();
    if (activeFiles.length) {
      ref = this.getActiveFiles();
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        totalBytesSent += file.upload.bytesSent;
        totalBytes += file.upload.total;
      }
      totalUploadProgress = 100 * totalBytesSent / totalBytes;
    } else {
      totalUploadProgress = 100;
    }
    return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
  };

  Dropzone.prototype._getParamName = function(n) {
    if (typeof this.options.paramName === "function") {
      return this.options.paramName(n);
    } else {
      return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
    }
  };

  Dropzone.prototype._renameFilename = function(name, file) {
    if (typeof this.options.renameFilename !== "function") {
      return name;
    }
    return this.options.renameFilename(name, file);
  };

  Dropzone.prototype.getFallbackForm = function() {
    var existingFallback, fields, fieldsString, form;
    if (existingFallback = this.getExistingFallback()) {
      return existingFallback;
    }
    fieldsString = "<div class=\"dz-fallback\">";
    if (this.options.dictFallbackText) {
      fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
    }
    fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
    fields = Dropzone.createElement(fieldsString);
    if (this.element.tagName !== "FORM") {
      form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
      form.appendChild(fields);
    } else {
      this.element.setAttribute("enctype", "multipart/form-data");
      this.element.setAttribute("method", this.options.method);
    }
    return form != null ? form : fields;
  };

  Dropzone.prototype.getExistingFallback = function() {
    var fallback, getFallback, j, len, ref, tagName;
    getFallback = function(elements) {
      var el, j, len;
      for (j = 0, len = elements.length; j < len; j++) {
        el = elements[j];
        if (/(^| )fallback($| )/.test(el.className)) {
          return el;
        }
      }
    };
    ref = ["div", "form"];
    for (j = 0, len = ref.length; j < len; j++) {
      tagName = ref[j];
      if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
        return fallback;
      }
    }
  };

  Dropzone.prototype.setupEventListeners = function() {
    var elementListeners, event, j, len, listener, ref, results;
    ref = this.listeners;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      elementListeners = ref[j];
      results.push((function() {
        var ref1, results1;
        ref1 = elementListeners.events;
        results1 = [];
        for (event in ref1) {
          listener = ref1[event];
          results1.push(elementListeners.element.addEventListener(event, listener, false));
        }
        return results1;
      })());
    }
    return results;
  };

  Dropzone.prototype.removeEventListeners = function() {
    var elementListeners, event, j, len, listener, ref, results;
    ref = this.listeners;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      elementListeners = ref[j];
      results.push((function() {
        var ref1, results1;
        ref1 = elementListeners.events;
        results1 = [];
        for (event in ref1) {
          listener = ref1[event];
          results1.push(elementListeners.element.removeEventListener(event, listener, false));
        }
        return results1;
      })());
    }
    return results;
  };

  Dropzone.prototype.disable = function() {
    var file, j, len, ref, results;
    this.clickableElements.forEach(function(element) {
      return element.classList.remove("dz-clickable");
    });
    this.removeEventListeners();
    ref = this.files;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      file = ref[j];
      results.push(this.cancelUpload(file));
    }
    return results;
  };

  Dropzone.prototype.enable = function() {
    this.clickableElements.forEach(function(element) {
      return element.classList.add("dz-clickable");
    });
    return this.setupEventListeners();
  };

  Dropzone.prototype.filesize = function(size) {
    var cutoff, i, j, len, selectedSize, selectedUnit, unit, units;
    selectedSize = 0;
    selectedUnit = "b";
    if (size > 0) {
      units = ['TB', 'GB', 'MB', 'KB', 'b'];
      for (i = j = 0, len = units.length; j < len; i = ++j) {
        unit = units[i];
        cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
        if (size >= cutoff) {
          selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
          selectedUnit = unit;
          break;
        }
      }
      selectedSize = Math.round(10 * selectedSize) / 10;
    }
    return "<strong>" + selectedSize + "</strong> " + selectedUnit;
  };

  Dropzone.prototype._updateMaxFilesReachedClass = function() {
    if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
      if (this.getAcceptedFiles().length === this.options.maxFiles) {
        this.emit('maxfilesreached', this.files);
      }
      return this.element.classList.add("dz-max-files-reached");
    } else {
      return this.element.classList.remove("dz-max-files-reached");
    }
  };

  Dropzone.prototype.drop = function(e) {
    var files, items;
    if (!e.dataTransfer) {
      return;
    }
    this.emit("drop", e);
    files = e.dataTransfer.files;
    this.emit("addedfiles", files);
    if (files.length) {
      items = e.dataTransfer.items;
      if (items && items.length && (items[0].webkitGetAsEntry != null)) {
        this._addFilesFromItems(items);
      } else {
        this.handleFiles(files);
      }
    }
  };

  Dropzone.prototype.paste = function(e) {
    var items, ref;
    if ((e != null ? (ref = e.clipboardData) != null ? ref.items : void 0 : void 0) == null) {
      return;
    }
    this.emit("paste", e);
    items = e.clipboardData.items;
    if (items.length) {
      return this._addFilesFromItems(items);
    }
  };

  Dropzone.prototype.handleFiles = function(files) {
    var file, j, len, results;
    results = [];
    for (j = 0, len = files.length; j < len; j++) {
      file = files[j];
      results.push(this.addFile(file));
    }
    return results;
  };

  Dropzone.prototype._addFilesFromItems = function(items) {
    var entry, item, j, len, results;
    results = [];
    for (j = 0, len = items.length; j < len; j++) {
      item = items[j];
      if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
        if (entry.isFile) {
          results.push(this.addFile(item.getAsFile()));
        } else if (entry.isDirectory) {
          results.push(this._addFilesFromDirectory(entry, entry.name));
        } else {
          results.push(void 0);
        }
      } else if (item.getAsFile != null) {
        if ((item.kind == null) || item.kind === "file") {
          results.push(this.addFile(item.getAsFile()));
        } else {
          results.push(void 0);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
    var dirReader, errorHandler, readEntries;
    dirReader = directory.createReader();
    errorHandler = function(error) {
      return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
    };
    readEntries = (function(_this) {
      return function() {
        return dirReader.readEntries(function(entries) {
          var entry, j, len;
          if (entries.length > 0) {
            for (j = 0, len = entries.length; j < len; j++) {
              entry = entries[j];
              if (entry.isFile) {
                entry.file(function(file) {
                  if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                    return;
                  }
                  file.fullPath = path + "/" + file.name;
                  return _this.addFile(file);
                });
              } else if (entry.isDirectory) {
                _this._addFilesFromDirectory(entry, path + "/" + entry.name);
              }
            }
            readEntries();
          }
          return null;
        }, errorHandler);
      };
    })(this);
    return readEntries();
  };

  Dropzone.prototype.addImageData = function(file, callback) {
    return LoadImage(file, function(img) {
      if (img.type !== 'error') {
        file.imageData = {
          image: img,
          width: img.naturalWidth,
          height: img.naturalHeight
        };
      }
      console.log('Image loaded: ', img);
      return callback(file);
    });
  };

  Dropzone.prototype.accept = function(file, done) {
    if (file.size > this.options.maxFilesize * 1024 * 1024) {
      return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
    } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
      return done(this.options.dictInvalidFileType);
    } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
      done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
      return this.emit("maxfilesexceeded", file);
    } else if (file.imageData && this.options.maxImageSize && file.imageData.width * file.imageData.height > this.options.maxImageSize * 1000000) {
      done(this.options.dictMaxImageSizeExceeded.replace("{{maxImageSize}}", this.options.maxImageSize));
      return this.emit("maximagesizeexceeded", file);
    } else {
      return this.options.accept.call(this, file, done);
    }
  };

  Dropzone.prototype.addFile = function(file) {
    return this.addImageData(file, (function(_this) {
      return function() {
        return _this._addFile(file);
      };
    })(this));
  };

  Dropzone.prototype._addFile = function(file) {
    return this.accept(file, (function(_this) {
      return function(error) {
        if (error) {
          file.accepted = false;
          file.status = Dropzone.REJECTED;
          return _this.emit("reject", file, error);
        } else {
          file.accepted = true;
          file.upload = {
            progress: 0,
            total: file.size,
            bytesSent: 0
          };
          file.status = Dropzone.ADDED;
          file.uploadAttempt = 1;
          _this.files.push(file);
          _this.emit("addedfile", file);
          _this._enqueueThumbnail(file);
          if (_this.options.autoQueue) {
            _this.enqueueFile(file);
          }
          return _this._updateMaxFilesReachedClass();
        }
      };
    })(this));
  };

  Dropzone.prototype.enqueueFiles = function(files) {
    var file, j, len;
    for (j = 0, len = files.length; j < len; j++) {
      file = files[j];
      this.enqueueFile(file);
    }
    return null;
  };

  Dropzone.prototype.enqueueFile = function(file) {
    if (file.status === Dropzone.ADDED && file.accepted === true) {
      file.status = Dropzone.QUEUED;
      if (this.options.autoProcessQueue) {
        return setTimeout(((function(_this) {
          return function() {
            return _this.processQueue();
          };
        })(this)), 0);
      }
    } else {
      throw new Error("This file can't be queued because it has already been processed or was rejected.");
    }
  };

  Dropzone.prototype._thumbnailQueue = [];

  Dropzone.prototype._processingThumbnail = false;

  Dropzone.prototype._enqueueThumbnail = function(file) {
    if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
      this._thumbnailQueue.push(file);
      return setTimeout(((function(_this) {
        return function() {
          return _this._processThumbnailQueue();
        };
      })(this)), 0);
    }
  };

  Dropzone.prototype._processThumbnailQueue = function() {
    if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
      return;
    }
    this._processingThumbnail = true;
    return this.createThumbnail(this._thumbnailQueue.shift(), (function(_this) {
      return function() {
        _this._processingThumbnail = false;
        return _this._processThumbnailQueue();
      };
    })(this));
  };

  Dropzone.prototype.removeFile = function(file) {
    if (file.status === Dropzone.UPLOADING) {
      this.cancelUpload(file);
    }
    this.files = without(this.files, file);
    this.emit("removedfile", file);
    if (this.files.length === 0) {
      return this.emit("reset");
    }
  };

  Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
    var file, j, len, ref;
    if (cancelIfNecessary == null) {
      cancelIfNecessary = false;
    }
    ref = this.files.slice();
    for (j = 0, len = ref.length; j < len; j++) {
      file = ref[j];
      if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
        this.removeFile(file);
      }
    }
    return null;
  };

  Dropzone.prototype.createThumbnail = function(file, callback) {
    var fileReader;
    fileReader = new FileReader;
    fileReader.onload = (function(_this) {
      return function() {
        if (file.type === "image/svg+xml") {
          _this.emit("thumbnail", file, fileReader.result);
          if (callback != null) {
            callback();
          }
          return;
        }
        return _this.createThumbnailFromUrl(file, fileReader.result, callback);
      };
    })(this);
    return fileReader.readAsDataURL(file);
  };

  Dropzone.prototype.createThumbnailFromUrl = function(file, imageUrl, callback, crossOrigin) {
    return LoadImage.parseMetaData(file, (function(_this) {
      return function(data) {
        var options;
        options = {
          canvas: true,
          maxWidth: _this.options.thumbnailWidth,
          maxHeight: _this.options.thumbnailHeight,
          crop: true,
          crossOrigin: crossOrigin,
          orientation: data.exif != null ? data.exif.get('Orientation') : void 0
        };
        return LoadImage(imageUrl, function(canvas) {
          var thumbnail;
          if (canvas.type !== 'error') {
            thumbnail = canvas.toDataURL("image/png");
            _this.emit("thumbnail", file, thumbnail);
          }
          if (callback != null) {
            return callback();
          }
        }, options);
      };
    })(this));
  };

  Dropzone.prototype.processQueue = function() {
    var i, parallelUploads, processingLength, queuedFiles;
    parallelUploads = this.options.parallelUploads;
    processingLength = this.getUploadingFiles().length;
    i = processingLength;
    if (processingLength >= parallelUploads) {
      return;
    }
    queuedFiles = this.getQueuedFiles();
    if (!(queuedFiles.length > 0)) {
      return;
    }
    if (this.options.uploadMultiple) {
      return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
    } else {
      while (i < parallelUploads) {
        if (!queuedFiles.length) {
          return;
        }
        this.processFile(queuedFiles.shift());
        i++;
      }
    }
  };

  Dropzone.prototype.processFile = function(file) {
    return this.processFiles([file]);
  };

  Dropzone.prototype.processFiles = function(files) {
    var file, j, len;
    for (j = 0, len = files.length; j < len; j++) {
      file = files[j];
      file.processing = true;
      file.status = Dropzone.UPLOADING;
      this.emit("processing", file);
    }
    if (this.options.uploadMultiple) {
      this.emit("processingmultiple", files);
    }
    return this.uploadFiles(files);
  };

  Dropzone.prototype._getFilesWithXhr = function(xhr) {
    var file, files;
    return files = (function() {
      var j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.xhr === xhr) {
          results.push(file);
        }
      }
      return results;
    }).call(this);
  };

  Dropzone.prototype.cancelUpload = function(file) {
    var groupedFile, groupedFiles, j, k, len, len1, ref;
    if (file.status === Dropzone.UPLOADING) {
      groupedFiles = this._getFilesWithXhr(file.xhr);
      for (j = 0, len = groupedFiles.length; j < len; j++) {
        groupedFile = groupedFiles[j];
        groupedFile.status = Dropzone.CANCELED;
      }
      file.xhr.abort();
      for (k = 0, len1 = groupedFiles.length; k < len1; k++) {
        groupedFile = groupedFiles[k];
        this.emit("canceled", groupedFile);
      }
      if (this.options.uploadMultiple) {
        this.emit("canceledmultiple", groupedFiles);
      }
    } else if ((ref = file.status) === Dropzone.ADDED || ref === Dropzone.QUEUED) {
      file.status = Dropzone.CANCELED;
      this.emit("canceled", file);
      if (this.options.uploadMultiple) {
        this.emit("canceledmultiple", [file]);
      }
    }
    if (this.options.autoProcessQueue) {
      return this.processQueue();
    }
  };

  resolveOption = function() {
    var args, option;
    option = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (typeof option === 'function') {
      return option.apply(this, args);
    }
    return option;
  };

  Dropzone.prototype.uploadFile = function(file) {
    return this.uploadFiles([file]);
  };

  Dropzone.prototype.uploadFiles = function(files) {
    var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, j, k, key, l, len, len1, len2, len3, m, method, o, option, progressObj, ref, ref1, ref2, ref3, ref4, ref5, response, updateProgress, url, value, xhr;
    xhr = new XMLHttpRequest();
    for (j = 0, len = files.length; j < len; j++) {
      file = files[j];
      file.xhr = xhr;
    }
    method = resolveOption(this.options.method, files);
    url = resolveOption(this.options.url, files);
    xhr.open(method, url, true);
    xhr.withCredentials = !!this.options.withCredentials;
    response = null;
    handleError = (function(_this) {
      return function() {
        var k, len1, results;
        results = [];
        for (k = 0, len1 = files.length; k < len1; k++) {
          file = files[k];
          if (file.uploadAttempt >= _this.options.uploadAttempts) {
            results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
          } else {
            file.uploadAttempt++;
            results.push(setTimeout((function() {
              _this.emit("autoretry", file, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
              return _this.uploadFile(file);
            }), 1000));
          }
        }
        return results;
      };
    })(this);
    updateProgress = (function(_this) {
      return function(e) {
        var allFilesFinished, k, l, len1, len2, len3, m, progress, results;
        if (e != null) {
          progress = 100 * e.loaded / e.total;
          for (k = 0, len1 = files.length; k < len1; k++) {
            file = files[k];
            file.upload = {
              progress: progress,
              total: e.total,
              bytesSent: e.loaded
            };
          }
        } else {
          allFilesFinished = true;
          progress = 100;
          for (l = 0, len2 = files.length; l < len2; l++) {
            file = files[l];
            if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
              allFilesFinished = false;
            }
            file.upload.progress = progress;
            file.upload.bytesSent = file.upload.total;
          }
          if (allFilesFinished) {
            return;
          }
        }
        results = [];
        for (m = 0, len3 = files.length; m < len3; m++) {
          file = files[m];
          results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
        }
        return results;
      };
    })(this);
    xhr.onload = (function(_this) {
      return function(e) {
        var ref;
        if (files[0].status === Dropzone.CANCELED) {
          return;
        }
        if (xhr.readyState !== 4) {
          return;
        }
        response = xhr.responseText;
        if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
          try {
            response = JSON.parse(response);
          } catch (error1) {
            e = error1;
            response = "Invalid JSON response from server.";
          }
        }
        updateProgress();
        if (!((200 <= (ref = xhr.status) && ref < 300))) {
          return handleError();
        } else {
          return _this._finished(files, response, e);
        }
      };
    })(this);
    xhr.onerror = (function(_this) {
      return function() {
        if (files[0].status === Dropzone.CANCELED) {
          return;
        }
        return handleError();
      };
    })(this);
    progressObj = (ref = xhr.upload) != null ? ref : xhr;
    progressObj.onprogress = updateProgress;
    headers = {
      "Accept": "application/json",
      "Cache-Control": "no-cache",
      "X-Requested-With": "XMLHttpRequest"
    };
    if (this.options.headers) {
      extend(headers, this.options.headers);
    }
    for (headerName in headers) {
      headerValue = headers[headerName];
      if (headerValue) {
        xhr.setRequestHeader(headerName, headerValue);
      }
    }
    formData = new FormData();
    if (this.options.params) {
      ref1 = this.options.params;
      for (key in ref1) {
        value = ref1[key];
        formData.append(key, value);
      }
    }
    for (k = 0, len1 = files.length; k < len1; k++) {
      file = files[k];
      this.emit("sending", file, xhr, formData);
    }
    if (this.options.uploadMultiple) {
      this.emit("sendingmultiple", files, xhr, formData);
    }
    if (this.element.tagName === "FORM") {
      ref2 = this.element.querySelectorAll("input, textarea, select, button");
      for (l = 0, len2 = ref2.length; l < len2; l++) {
        input = ref2[l];
        inputName = input.getAttribute("name");
        inputType = input.getAttribute("type");
        if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
          ref3 = input.options;
          for (m = 0, len3 = ref3.length; m < len3; m++) {
            option = ref3[m];
            if (option.selected) {
              formData.append(inputName, option.value);
            }
          }
        } else if (!inputType || ((ref4 = inputType.toLowerCase()) !== "checkbox" && ref4 !== "radio") || input.checked) {
          formData.append(inputName, input.value);
        }
      }
    }
    for (i = o = 0, ref5 = files.length - 1; 0 <= ref5 ? o <= ref5 : o >= ref5; i = 0 <= ref5 ? ++o : --o) {
      formData.append(this._getParamName(i), files[i], this._renameFilename(files[i].name, files[i]));
    }
    return this.submitRequest(xhr, formData, files);
  };

  Dropzone.prototype.submitRequest = function(xhr, formData, files) {
    return xhr.send(formData);
  };

  Dropzone.prototype._finished = function(files, responseText, e) {
    var file, j, len;
    for (j = 0, len = files.length; j < len; j++) {
      file = files[j];
      file.status = Dropzone.SUCCESS;
      this.emit("success", file, responseText, e);
      this.emit("complete", file);
    }
    if (this.options.uploadMultiple) {
      this.emit("successmultiple", files, responseText, e);
      this.emit("completemultiple", files);
    }
    if (this.options.autoProcessQueue) {
      return this.processQueue();
    }
  };

  Dropzone.prototype._errorProcessing = function(files, message, xhr) {
    var file, j, len;
    for (j = 0, len = files.length; j < len; j++) {
      file = files[j];
      file.status = Dropzone.ERROR;
      this.emit("error", file, message, xhr);
      this.emit("complete", file);
    }
    if (this.options.uploadMultiple) {
      this.emit("errormultiple", files, message, xhr);
      this.emit("completemultiple", files);
    }
    if (this.options.autoProcessQueue) {
      return this.processQueue();
    }
  };

  return Dropzone;

})(Emitter);

Dropzone.version = "4.3.0";

Dropzone.options = {};

Dropzone.optionsForElement = function(element) {
  if (element.getAttribute("id")) {
    return Dropzone.options[camelize(element.getAttribute("id"))];
  } else {
    return void 0;
  }
};

Dropzone.instances = [];

Dropzone.forElement = function(element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }
  if ((element != null ? element.dropzone : void 0) == null) {
    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  }
  return element.dropzone;
};

Dropzone.autoDiscover = false;

Dropzone.discover = function() {
  var checkElements, dropzone, dropzones, j, len, results;
  if (document.querySelectorAll) {
    dropzones = document.querySelectorAll(".dropzone");
  } else {
    dropzones = [];
    checkElements = function(elements) {
      var el, j, len, results;
      results = [];
      for (j = 0, len = elements.length; j < len; j++) {
        el = elements[j];
        if (/(^| )dropzone($| )/.test(el.className)) {
          results.push(dropzones.push(el));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };
    checkElements(document.getElementsByTagName("div"));
    checkElements(document.getElementsByTagName("form"));
  }
  results = [];
  for (j = 0, len = dropzones.length; j < len; j++) {
    dropzone = dropzones[j];
    if (Dropzone.optionsForElement(dropzone) !== false) {
      results.push(new Dropzone(dropzone));
    } else {
      results.push(void 0);
    }
  }
  return results;
};

Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

Dropzone.isBrowserSupported = function() {
  var capableBrowser, j, len, ref, regex;
  capableBrowser = true;
  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
    if (!("classList" in document.createElement("a"))) {
      capableBrowser = false;
    } else {
      ref = Dropzone.blacklistedBrowsers;
      for (j = 0, len = ref.length; j < len; j++) {
        regex = ref[j];
        if (regex.test(navigator.userAgent)) {
          capableBrowser = false;
          continue;
        }
      }
    }
  } else {
    capableBrowser = false;
  }
  return capableBrowser;
};

without = function(list, rejectedItem) {
  var item, j, len, results;
  results = [];
  for (j = 0, len = list.length; j < len; j++) {
    item = list[j];
    if (item !== rejectedItem) {
      results.push(item);
    }
  }
  return results;
};

camelize = function(str) {
  return str.replace(/[\-_](\w)/g, function(match) {
    return match.charAt(1).toUpperCase();
  });
};

Dropzone.createElement = function(string) {
  var div;
  div = document.createElement("div");
  div.innerHTML = string;
  return div.childNodes[0];
};

Dropzone.elementInside = function(element, container) {
  if (element === container) {
    return true;
  }
  while (element = element.parentNode) {
    if (element === container) {
      return true;
    }
  }
  return false;
};

Dropzone.getElement = function(el, name) {
  var element;
  if (typeof el === "string") {
    element = document.querySelector(el);
  } else if (el.nodeType != null) {
    element = el;
  }
  if (element == null) {
    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
  }
  return element;
};

Dropzone.getElements = function(els, name) {
  var e, el, elements, j, k, len, len1, ref;
  if (els instanceof Array) {
    elements = [];
    try {
      for (j = 0, len = els.length; j < len; j++) {
        el = els[j];
        elements.push(this.getElement(el, name));
      }
    } catch (error1) {
      e = error1;
      elements = null;
    }
  } else if (typeof els === "string") {
    elements = [];
    ref = document.querySelectorAll(els);
    for (k = 0, len1 = ref.length; k < len1; k++) {
      el = ref[k];
      elements.push(el);
    }
  } else if (els.nodeType != null) {
    elements = [els];
  }
  if (!((elements != null) && elements.length)) {
    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
  }
  return elements;
};

Dropzone.confirm = function(question, accepted, rejected) {
  if (window.confirm(question)) {
    return accepted();
  } else if (rejected != null) {
    return rejected();
  }
};

Dropzone.isValidFile = function(file, acceptedFiles) {
  var baseMimeType, j, len, mimeType, validType;
  if (!acceptedFiles) {
    return true;
  }
  acceptedFiles = acceptedFiles.split(",");
  mimeType = file.type;
  baseMimeType = mimeType.replace(/\/.*$/, "");
  for (j = 0, len = acceptedFiles.length; j < len; j++) {
    validType = acceptedFiles[j];
    validType = validType.trim();
    if (validType.charAt(0) === ".") {
      if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
        return true;
      }
    } else if (/\/\*$/.test(validType)) {
      if (baseMimeType === validType.replace(/\/.*$/, "")) {
        return true;
      }
    } else {
      if (mimeType === validType) {
        return true;
      }
    }
  }
  return false;
};

if (typeof jQuery !== "undefined" && jQuery !== null) {
  jQuery.fn.dropzone = function(options) {
    return this.each(function() {
      return new Dropzone(this, options);
    });
  };
}

module.exports = Dropzone;

Dropzone.ADDED = "added";

Dropzone.QUEUED = "queued";

Dropzone.ACCEPTED = Dropzone.QUEUED;

Dropzone.UPLOADING = "uploading";

Dropzone.PROCESSING = Dropzone.UPLOADING;

Dropzone.CANCELED = "canceled";

Dropzone.REJECTED = "rejected";

Dropzone.ERROR = "error";

Dropzone.SUCCESS = "success";


/*

Bugfix for iOS 6 and 7
Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
based on the work of https://github.com/stomita/ios-imagefile-megapixel
 */

detectVerticalSquash = function(img) {
  var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
  iw = img.naturalWidth;
  ih = img.naturalHeight;
  canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = ih;
  ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  data = ctx.getImageData(0, 0, 1, ih).data;
  sy = 0;
  ey = ih;
  py = ih;
  while (py > sy) {
    alpha = data[(py - 1) * 4 + 3];
    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }
    py = (ey + sy) >> 1;
  }
  ratio = py / ih;
  if (ratio === 0) {
    return 1;
  } else {
    return ratio;
  }
};

drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
  var vertSquashRatio;
  vertSquashRatio = detectVerticalSquash(img);
  return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
};


/*
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 */

contentLoaded = function(win, fn) {
  var add, doc, done, init, poll, pre, rem, root, top;
  done = false;
  top = true;
  doc = win.document;
  root = doc.documentElement;
  add = (doc.addEventListener ? "addEventListener" : "attachEvent");
  rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
  pre = (doc.addEventListener ? "" : "on");
  init = function(e) {
    if (e.type === "readystatechange" && doc.readyState !== "complete") {
      return;
    }
    (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
    if (!done && (done = true)) {
      return fn.call(win, e.type || e);
    }
  };
  poll = function() {
    var e;
    try {
      root.doScroll("left");
    } catch (error1) {
      e = error1;
      setTimeout(poll, 50);
      return;
    }
    return init("poll");
  };
  if (doc.readyState !== "complete") {
    if (doc.createEventObject && root.doScroll) {
      try {
        top = !win.frameElement;
      } catch (error1) {}
      if (top) {
        poll();
      }
    }
    doc[add](pre + "DOMContentLoaded", init, false);
    doc[add](pre + "readystatechange", init, false);
    return win[add](pre + "load", init, false);
  }
};

Dropzone._autoDiscoverFunction = function() {
  if (Dropzone.autoDiscover) {
    return Dropzone.discover();
  }
};

contentLoaded(window, Dropzone._autoDiscoverFunction);


},{"blueimp-load-image":1}]},{},[7])(7)
});
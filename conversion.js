'use strict'

let Papa = require('papaparse');
let fs = require('fs');

let inputFileName = process.argv[2];
let outputFileName = process.argv[3];

fs.readFile(inputFileName, function (err, data) {
  if (err) {
    throw err;
  }
  let results = Papa.parse(data.toString(), {
    delimiter: ",",
    newline: "",
    skipEmptyLines: true,
  });

  var tracks = {};
  var rowOffset = 7;
  var trackOffset = 2;

  for (var i = 0; i < 4; i++) {
    let track = buildTrack(results.data, rowOffset, trackOffset);
    if (track["displayName"] != undefined) {
      tracks[track["displayName"].toUpperCase()] = track;
    }
    trackOffset += 3;
  }

  fs.writeFile(outputFileName, JSON.stringify(tracks, null, 4), (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Saved');
  });

});

function buildTrack(data, rowOffset, trackOffset) {
  var track = {};
  track["displayName"] = data[rowOffset][trackOffset];
  track["description"] = data[rowOffset + 1][trackOffset];
  track["milestones"] = [];

  for (var i = 0; i < 5; i++) {
    track["milestones"][i] = buildMilestone(data, rowOffset + 2, trackOffset);
    rowOffset += 5;
  }

  return track;
}

function buildMilestone(data, rowOffset, trackOffset) {
  var milestone = {};
  milestone["summary"] = data[rowOffset][trackOffset];
  milestone["signals"] = [];
  milestone["examples"] = [];

  for (var i = 2; i <= 4; i++) {
    milestone["signals"][i - 2] = data[rowOffset + i][trackOffset];
    milestone["examples"][i - 2] = data[rowOffset + i][trackOffset + 1];
  }

  return milestone;
}

import "babel-polyfill";
import $ from "jquery";
import { songView } from "./model.js";
import { loadInstrumentButtons, loadOrientationButtons } from "./controller.js";
import { renderChords } from "./render.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";

$(document).ready(function() {
  loadInstrumentButtons();
  loadOrientationButtons();
  songView.setSong({"allChords": ["Am", "F", "C", "G"], "lines": []});
  renderChords();

  $("#renderChords").click(function() {
    const rawChordString = $("#chords").val();

    // Super basic parser
    // Removes white space and splits by comma
    const allChords = rawChordString.replace(/ /g,"").split(",");
    songView.setSong({"allChords": allChords, "lines": []});
    renderChords();
  });
});
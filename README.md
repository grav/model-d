# model-d
Control app for the [Behringer Model D](http://www.musictri.be/Categories/Behringer/Keyboards/Synthesizers-and-Samplers/MODEL-D/p/P0CQJ)

## About
This app (which is just a webpage) can control some parameters on your Behringer Model D by sending out sysex (system exclusive midi messages).

It uses the HTML 5 upcoming standard 'WebMIDI', and currently works in Google Chrome.

## Usage

Just navigate to https://model-d.netlify.com to get started!

*Happy knob-twisting!*

## Todo

- Implement all features described in the sysex chapter of the [manual](https://medias.audiofanzine.com/files/behringer-model-d-user-manual-480240.pdf). 
- Figure out why pitch bend range change does not work (maybe an update to [v1.05](http://www.musictri.be/Categories/Behringer/Keyboards/Synthesizers-and-Samplers/MODEL-D/p/P0CQJ/downloads) is needed?)
- Display the (perceived) state of the device in the app
- React to connect/disconnect of device

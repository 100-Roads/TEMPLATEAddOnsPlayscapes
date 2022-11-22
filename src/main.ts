/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup","It's " + time,[]);
    })
// custom code

//Popup Oncean campus
WA.room.onEnterLayer('message-1').subscribe(() => {
    currentPopup = WA.ui.openPopup("CampusPopup2","Campus",[]);
  })
  WA.room.onLeaveLayer('message-1').subscribe(closePopup)
  
  //Popup Oncean campus
  WA.room.onEnterLayer('message-2').subscribe(() => {
    currentPopup = WA.ui.openPopup("CampusPopup1","Campus",[]);
  })
  WA.room.onLeaveLayer('message-2').subscribe(closePopup)
  //Popup Oncean campus
  WA.room.onEnterLayer('message-3').subscribe(() => {
    currentPopup = WA.ui.openPopup("CampusPopup","Campus",[]);
  })
  WA.room.onLeaveLayer('message-3').subscribe(closePopup)






    WA.room.onLeaveLayer('clockZone').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};

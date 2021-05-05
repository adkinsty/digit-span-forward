/*************************** 
 * Digit-Span-Forward Test *
 ***************************/

import { PsychoJS } from './lib/core-2021.1.2.js';
import * as core from './lib/core-2021.1.2.js';
import { TrialHandler } from './lib/data-2021.1.2.js';
import { Scheduler } from './lib/util-2021.1.2.js';
import * as visual from './lib/visual-2021.1.2.js';
import * as sound from './lib/sound-2021.1.2.js';
import * as util from './lib/util-2021.1.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'digit-span-forward';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(rngRoutineBegin());
flowScheduler.add(rngRoutineEachFrame());
flowScheduler.add(rngRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var instructions;
var key_resp;
var PresentationClock;
var fixation;
var pres_text;
var RecallClock;
var recall_text;
var key_resp_2;
var inputDisplay;
var allResponses;
var inputText;
var FeedbackClock;
var feedback_text;
var rngClock;
var rng_instr;
var rng_text;
var rng_resp;
var random_number;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'In this task you will be required to memorise the number sequence presented. You will start with a list of 3 numbers. If you are able to correctly recall two out of three lists you will proceed to longer list trials. Type out your answer when "Recall" screen appears using the numbers at the top of the keyboard. If you make a mistake you can use backspace to correct it. Press enter to confirm your answer. Feedback will be provided. Press space to start the experiment. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Presentation"
  PresentationClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  pres_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'pres_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Recall"
  RecallClock = new util.Clock();
  recall_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_text',
    text: 'Recall',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  inputDisplay = new visual.TextStim({
    win: psychoJS.window,
    name: 'inputDisplay',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Store responses
  allResponses = []
  inputText = '';
  
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "rng"
  rngClock = new util.Clock();
  rng_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'rng_instr',
    text: 'This is your 4-digit completion code. Please write this down for later use. When you are finished, press SPACE to end the experiment. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  rng_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rng_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  rng_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  random_number = Math.floor(Math.random() * 9999) + 1000;
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(instructions);
    InstructionsComponents.push(key_resp);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions'-------
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blocks;
var currentLoop;
function blocksLoopBegin(blocksLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'choose_digitSpan.xlsx',
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlock of blocks) {
    const snapshot = blocks.getSnapshot();
    blocksLoopScheduler.add(importConditions(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    blocksLoopScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    blocksLoopScheduler.add(trialsLoopScheduler);
    blocksLoopScheduler.add(trialsLoopEnd);
    blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: condition_file,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(PresentationRoutineBegin(snapshot));
    trialsLoopScheduler.add(PresentationRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(PresentationRoutineEnd(snapshot));
    trialsLoopScheduler.add(RecallRoutineBegin(snapshot));
    trialsLoopScheduler.add(RecallRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(RecallRoutineEnd(snapshot));
    trialsLoopScheduler.add(FeedbackRoutineBegin(snapshot));
    trialsLoopScheduler.add(FeedbackRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(FeedbackRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var nList;
var PresentationComponents;
function PresentationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Presentation'-------
    t = 0;
    PresentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Convert sequence to list
    nList = digits.toString().split('').map((i)=>Number(i))
    // keep track of which components have finished
    PresentationComponents = [];
    PresentationComponents.push(fixation);
    PresentationComponents.push(pres_text);
    
    for (const thisComponent of PresentationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var i;
function PresentationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Presentation'-------
    // get current time
    t = PresentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *pres_text* updates
    if (t >= 1 && pres_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pres_text.tStart = t;  // (not accounting for frame time here)
      pres_text.frameNStart = frameN;  // exact frame index
      
      pres_text.setAutoDraw(true);
    }

    // Convert time ti a list index
    i = Math.floor(t-1);
    
    // Index current number in the list
    // or end routine if all numbers presented
    if (i === nList.length) {
        continueRoutine = false;
    } else {
        pres_text.text = nList[i]
    }
    
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PresentationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PresentationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Presentation'-------
    for (const thisComponent of PresentationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    pres_text.text = ''
    // the Routine "Presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var RecallComponents;
function RecallRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Recall'-------
    t = 0;
    RecallClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.eventManager.clearKeys();
    inputText = '';
    // keep track of which components have finished
    RecallComponents = [];
    RecallComponents.push(recall_text);
    RecallComponents.push(key_resp_2);
    RecallComponents.push(inputDisplay);
    
    for (const thisComponent of RecallComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var keys;
var n;
function RecallRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Recall'-------
    // get current time
    t = RecallClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *recall_text* updates
    if (t >= 0 && recall_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_text.tStart = t;  // (not accounting for frame time here)
      recall_text.frameNStart = frameN;  // exact frame index
      
      recall_text.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'return', 'backspace'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys.map((key) => key.name);  // storing all keys
        key_resp_2.rt = _key_resp_2_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *inputDisplay* updates
    if (t >= 0 && inputDisplay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inputDisplay.tStart = t;  // (not accounting for frame time here)
      inputDisplay.frameNStart = frameN;  // exact frame index
      
      inputDisplay.setAutoDraw(true);
    }

    keys = psychoJS.eventManager.getKeys()
    n = keys.length
    i = 0
    
    while (i < n) {
        
        if (keys[i].length == 1){
            inputText += keys[i];
            i += 1;
        } else if (keys[i] == 'backspace') {
            inputText = inputText.slice(0,-1);
            i += 1;
        } else if (keys[i] == 'space') {
            inputText += " ";
            i += 1;
        } else if (keys[i] == 'return') {
            continueRoutine = false;
            i += 1;
        } else if (keys[i] == 'escape') {
            psychoJS.quit();
            break
        } else {
            i += 1;
        }
        inputDisplay.setText(inputText);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RecallComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var correct;
var msg;
function RecallRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Recall'-------
    for (const thisComponent of RecallComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        }
    
    key_resp_2.stop();
    correct = 0;
    
    if (Number(inputText) === digits) {
        correct = 1;
        msg = "Correct";
        psychoJS.experiment.addData("correct", correct);
    } else {
        msg = "Incorrect";
        psychoJS.experiment.addData("Incorrect", correct);
    }
    psychoJS.experiment.addData("response", inputText);
    
    allResponses.push(correct);
    inputText = '';
    inputDisplay.setText(inputText);
    // the Routine "Recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Feedback'-------
    t = 0;
    FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    feedback_text.setText(msg);
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(feedback_text);
    
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Feedback'-------
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Feedback'-------
    for (const thisComponent of FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    // for incorrect, check that two responses exist
    // and that their sum of last two responses is zero
    
    if (allResponses.length >= 2 && allResponses.slice(-2).reduce((a,b)=>a+b) === 0) {
        trials.finished = true;
        blocks.finished = true;
    } else if (allResponses.slice(-2).reduce((a,b)=>a+b) === 2) {
        allResponses = [];
    }
    return Scheduler.Event.NEXT;
  };
}


var _rng_resp_allKeys;
var rngComponents;
function rngRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'rng'-------
    t = 0;
    rngClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    rng_text.setText(random_number);
    rng_resp.keys = undefined;
    rng_resp.rt = undefined;
    _rng_resp_allKeys = [];
    // keep track of which components have finished
    rngComponents = [];
    rngComponents.push(rng_instr);
    rngComponents.push(rng_text);
    rngComponents.push(rng_resp);
    
    for (const thisComponent of rngComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rngRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'rng'-------
    // get current time
    t = rngClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rng_instr* updates
    if (t >= 0.0 && rng_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rng_instr.tStart = t;  // (not accounting for frame time here)
      rng_instr.frameNStart = frameN;  // exact frame index
      
      rng_instr.setAutoDraw(true);
    }

    
    // *rng_text* updates
    if (t >= 0.0 && rng_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rng_text.tStart = t;  // (not accounting for frame time here)
      rng_text.frameNStart = frameN;  // exact frame index
      
      rng_text.setAutoDraw(true);
    }

    
    // *rng_resp* updates
    if (t >= 0.0 && rng_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rng_resp.tStart = t;  // (not accounting for frame time here)
      rng_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rng_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rng_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rng_resp.clearEvents(); });
    }

    if (rng_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = rng_resp.getKeys({keyList: ['space'], waitRelease: false});
      _rng_resp_allKeys = _rng_resp_allKeys.concat(theseKeys);
      if (_rng_resp_allKeys.length > 0) {
        rng_resp.keys = _rng_resp_allKeys[_rng_resp_allKeys.length - 1].name;  // just the last key pressed
        rng_resp.rt = _rng_resp_allKeys[_rng_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rngComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rngRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'rng'-------
    for (const thisComponent of rngComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rng_resp.keys', rng_resp.keys);
    if (typeof rng_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rng_resp.rt', rng_resp.rt);
        routineTimer.reset();
        }
    
    rng_resp.stop();
    // the Routine "rng" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

function pramod_doing_work(work, callback) {
    console.log("Started: " + work);
    console.log("Finished: " + work);
    callback();
}

function callWife() {
    console.log("Call wife when done");
}

pramod_doing_work("PW class", callWife);
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){ //defining our function
    for (var x=0; x<topics.length; x++) { //code block. Note indented for visual structure.
        console.log(topics[x]);
    }
}

function selectTopic(){
    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics()

console.log('Which topic should we study first?');
selectTopic()

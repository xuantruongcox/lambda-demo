exports.handler = async function(event, context){
    console.log("ENVIRONMENT VARAIABLES\n" + JSON.stringify(process.env, null, 2));
    console.log("EVENT\n" + JSON.stringify(event, null, 2));
    return context.logStreamName
}
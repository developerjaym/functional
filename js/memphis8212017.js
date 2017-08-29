const getMessages = (counter, arr, index = 0, msg = '') =>
{
    if(index === arr.length)
        return msg;
    if(!(counter%(index+1)) && arr[index])//!false, AKA the counter is divisible by the index+1 and the array has something other than undefined there
        msg += arr[index];
    return getMessages(counter, arr, index + 1, msg);
}

const fuzzBizz = (counter, arr, msg='') => {
    if(!counter)//0
        return msg;
    let messages = getMessages(counter, arr);
    if(messages.length)//not 0
        msg += counter + ": " + messages + "\n";
    return fuzzBizz(counter - 1, arr, msg);
}

console.log(fuzzBizz(100, [undefined, undefined, 'fizz', undefined, 'buzz', undefined, undefined, 'wut']))
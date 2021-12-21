import * as child from 'child_process';


const createServer = () => {
    child.exec('cd C:\\Users\\jeanc\\Desktop\\TESTENODE && node', (err, stdout, stderr) => { 
        // console.log(stdout);
        // console.log(stderr);
        let data= stdout
        console.log(data);
     });
}
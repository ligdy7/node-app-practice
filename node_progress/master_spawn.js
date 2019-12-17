const fs = require('fs')

const child_process = require('child_process')

// support.js 后面没有空格
for(let i=0; i < 4; i++) {
  const workerProcess = child_process.spawn('node', ['support.js', i])
 
   workerProcess.stdout.on('data', function (data) {
      console.log('stdout: ' + data)
   })
 
   workerProcess.stderr.on('data', function (data) {
      console.log('stderr: ' + data)
   })

   workerProcess.on('close', function (code) {
      console.log('子进程已退出，退出码 '+code)
   })
}
const { ErrorHandler } = require("./error")

const CatchAsyncError = (passedFunction) => (req,res,next) => {
        Promise.resolve(passedFunction(req,res,next)).catch(next)
}

module.exports = CatchAsyncError
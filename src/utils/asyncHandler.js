const asyncHandler = (fn)=>{
    (req,res,next)=>{
        Promise.resolve(fn(req,res,next))
        .catch((err)=>next(err))
    }
}

const asyncHandler2 = (fn)=>async (req,res,next)=>{
    try {
        await fn(req,res , next)
    } catch (error) {
        res.status(error.code || 500).json({
            success:false
        })
    }
}

export { asyncHandler}
const errorMiddleware= (err, req, res, next) => {
    console.error(err);
    
    if(err.code === 11000){
        return res.status(409).json({ 
        success: false,
        message: "A student with  this email already exists"
        });
    }
    if(err.name === "ValidationError"){
        const messages = Object.values(err.errors).map(val => val.message);
        return res.status(400).json({
            success: false,
            message: messages.join(", ")
        });
    }
    res.status(500).json({
        success: false,
        message: "Something went wrong!"
    });
};

module.exports = errorMiddleware;
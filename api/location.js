const router=require('express').Router();
const axios=require('axios')

router.get('/getAdd',async(req,res)=>{
    const {lat,lon}=req.query;
    try {
        const url=`https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=18&addressdetails=1&lat=${lat}&lon=${lon}`
        const resp=await axios.get(url);
        const data=resp.data;
        if(!data)
        return res.status(400).json({status:"Incorrect Format"})

        res.json({status:"Address",data});

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})
router.get('/getCoor',async(req,res)=>{
    const {country,state,district,city,locality}=req.query;
    try {
        const url=`https://nominatim.openstreetmap.org/?q=${country}+${state}+${district}+${city}+${locality}&format=jsonv2&limit=1&addressdetails=1`
        const resp=await axios.get(url);
        const data=resp.data;
        if(!data)
        return res.status(400).json({status:"Incorrect Format"})


        res.json({status:"Coordinates",latitude:data[0].lat,longitude:data[0].lon,coordinates:data});

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})


module.exports=router;

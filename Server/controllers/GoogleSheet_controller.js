const sheets = require("../googleSheets.js");

const Login=async(req,res)=> {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE__ID,
      range: process.env.GOOGLE_RANGE,
    });

    const rows = response.data.values;

const users = rows.slice(1).map(row => {
  return {
    Timestamp: row[0],
    Name: row[1],
    Password: row[2]
  };
});
    const {Name,Password}=req.body;    
    const USERS=users.find((u)=>
        u.Name==Name && u.Password==Password 
    )
    if(USERS){
         return res.status(200).json({
        success: true,
        message: "Login Successfully",
      });
    }
    return res.status(401).json({
      success: false,
      message: "Invalid Credentials",
    });    
  } catch (error) {
    console.error("Error reading Google Sheet:", error.message);
  }
}



module.exports = { Login };
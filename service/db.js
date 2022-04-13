const mongoose = require("mongoose")

// state coonection string 
mongoose.connect('mongodb://localhost:27017/SearchApi',{
    useNewUrlParser:true
})


// model creation
const Search = mongoose.model('Search',{
  SNo  : String,
Name :String,
CurrentMarketPrice :String,
MarketCap :String,
StockPE : String,
DividendYield : String,	
ROCE: String,
ROEPreviousAnnum : String,
DebttoEquity : String,	
EPSReserves : String,	
Debt : String

})

module.exports = {
    Search
}
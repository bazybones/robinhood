import React from 'react'

function StatsRow() {
    return (
        <div className="row" /* onClick={getModal} */>
        <div className="row__intro">
          <h1>{/* {props?.name} */}AAPL</h1>
          <p>{/* {props.volume && 
            (props.volume + " shares")
          } */}200 shares</p>
        </div>
        <div className="row__chart">
         {/*  <img src={StockChart} height={16}/> */}
        </div>
        <div className="row__numbers">
          <p className="row__price">{/* {props.price} */} $200</p>
          <p className="row__percentage"> +{/* {Number(percentage).toFixed(2)} */}200%</p>
        </div>
      </div>
    )
}

export default StatsRow

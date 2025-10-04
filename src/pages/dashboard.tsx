import "./css/dashboard.css"
import transfer from "../assets/transfer.png"
import loan from "../assets/loan.png"
import menu from "../assets/menu.png"
import deposit from "../assets/deposit.png"
import info from "../assets/info.png"
import { toast } from 'react-toastify'
import logo from "../assets/logo.svg";

export default function Dashboard() {
    return (
        <div>
            <div className="dashboard-nav">
                <div style={{height:30, marginLeft:20}}>
                    <img style={{height:"100%", objectFit:"contain"}} src={menu} alt="" />
                </div>
                <img src={logo} width={80} alt="" />
                {/* <div className="audiowide">TrustFund Home</div> */}
                <div></div>
            </div>

            <div className='container'>

                <p style={{ margin: "20px 0", fontWeight:"bold" }}>Welcome, Betty</p>
                <div className="dashboard-container">
                    <div>
                    <div className="accounts">
                        <div style={{ marginLeft: 10, fontSize: 20, color: "gray" }}>
                            <p style={{fontWeight:"bold"}}>Accounts</p>
                        </div>
                        <div className="acc-summary">
                            <div>
                                <p>Checking</p>
                                <p> <small> x3527 </small></p>
                            </div>

                            <div>
                                <p>$3,916,950.00</p>
                                <p><small>Available</small></p>
                            </div>
                        </div>
                        {/* <div style={{backgroundColor:"#002d7b", margin:"0 20px", padding:"10px"}}>
                        Transactions
                    </div> */}
                    </div>

                    <div className="dashboard-options">
                        {/* <p style={{ textAlign: "center", fontSize: 20, color: "gray", fontWeight: "bold" }} className="audiowide">Arvest</p> */}
                        <div className="dash-options">
                            <div className="items" style={{ cursor: "pointer" }} onClick={() => toast.error("$14,000.00 tax clearance required.")}>
                                <div className="item-img">
                                    <img src={transfer} alt="" />
                                </div>
                                <small>Transfer</small>
                            </div>
                            <div className="items" style={{ cursor: "pointer" }} onClick={() => toast.error("$14,000.00 tax clearance required.")}>
                                <div className="item-img">
                                    <img src={deposit} alt="" />
                                </div>
                                <small>Deposit</small>
                            </div>
                            <div className="items" style={{ cursor: "pointer" }} onClick={() => toast.error("$14,000.00 tax clearance required.")}>
                                <div className="item-img">
                                    <img src={loan} alt="" />
                                </div>
                                <small>Loan</small>
                            </div>
                            <div className="items" style={{ cursor: "pointer" }} onClick={() => toast.error("$14,000.00 tax clearance required.")}>
                                <div className="item-img">
                                    <img src={info} alt="" />
                                </div>
                                <small>Info</small>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="transactions">
                        <div style={{ fontSize: 18, color: "gray" }}>
                            <p style={{fontWeight:"bold"}}>Transactions</p>
                        </div>
                        <br />
                       
                       {/* Credit Txn - Interest Credit */}
<div className="txn-item" style={{ marginRight: 10 }}>
  <div>
    <p style={{ fontWeight: "bold" }}>Interest Credit</p>
    <small style={{ color: "gray" }}>Dec 31, 2013</small>
  </div>
  <div style={{ fontWeight: "bold", color: "green" }}>
    $3,250.00
  </div>
</div>

{/* Debit Txn - Legal Advisory Fee */}
<div className="txn-item" style={{ marginRight: 10 }}>
  <div>
    <p style={{ fontWeight: "bold" }}>Wire Transfer – Legal Advisory (Hughes & Law Group)</p>
    <small style={{ color: "gray" }}>Jul 17, 2013</small>
  </div>
  <div style={{ fontWeight: "bold", color: "red" }}>
    $45,000.00
  </div>
</div>

{/* Debit Txn - Bank Service Charges */}
<div className="txn-item" style={{ marginRight: 10 }}>
  <div>
    <p style={{ fontWeight: "bold" }}>Account Maintenance Fee</p>
    <small style={{ color: "gray" }}>Dec 15, 2012</small>
  </div>
  <div style={{ fontWeight: "bold", color: "red" }}>
    $600.00
  </div>
</div>

{/* Debit Txn - Funeral Home Payment */}
<div className="txn-item" style={{ marginRight: 10 }}>
  <div>
    <p style={{ fontWeight: "bold" }}>Payment – Greenwood Memorial Services</p>
    <small style={{ color: "gray" }}>Jan 25, 2011</small>
  </div>
  <div style={{ fontWeight: "bold", color: "red" }}>
    $38,700.00
  </div>
</div>

{/* Credit Txn - Property Sale */}
<div className="txn-item" style={{ marginRight: 10 }}>
  <div>
    <p style={{ fontWeight: "bold" }}>Deposit – Sale of Property (Houston, TX)</p>
    <small style={{ color: "gray" }}>Apr 14, 2010</small>
  </div>
  <div style={{ fontWeight: "bold", color: "green" }}>
    $2,500,000.00
  </div>
</div>

{/* Credit Txn - Stock Liquidation */}
<div className="txn-item" style={{ marginRight: 10 }}>
  <div>
    <p style={{ fontWeight: "bold" }}>Deposit – Proceeds from Stock Liquidation (Charles Schwab)</p>
    <small style={{ color: "gray" }}>Feb 02, 2010</small>
  </div>
  <div style={{ fontWeight: "bold", color: "green" }}>
    $1,000,000.00
  </div>
</div>

{/* Credit Txn - Insurance Payout */}
<div className="txn-item" style={{ marginRight: 10 }}>
  <div>
    <p style={{ fontWeight: "bold" }}>Deposit – Insurance Payout (Liberty Mutual)</p>
    <small style={{ color: "gray" }}>Jan 13, 2010</small>
  </div>
  <div style={{ fontWeight: "bold", color: "green" }}>
    $500,000.00
  </div>
</div>

{/* Credit Txn - Opening Balance */}
<div className="txn-item" style={{ marginRight: 10 }}>
  <div>
    <p style={{ fontWeight: "bold" }}>Opening Balance</p>
    <small style={{ color: "gray" }}>Jan 10, 2010. Checking</small>
  </div>
  <div style={{ fontWeight: "bold", color: "green" }}>
    -
  </div>
</div>


      
                    </div>
                </div>
            </div>
        </div>
    )
}

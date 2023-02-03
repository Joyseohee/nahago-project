import React, {Component} from 'react';
import Goal from "../components/Goal";
import DocPayment from "../components/docreq/DocPayment";
import DocPaymentBtn from "../components/docreq/DocPaymentBtn";

class DocReqDetail extends Component {

    constructor(props) {
        super(props);
        this.props.setpagename("전자 결재");
        this.state = {
            reqSend: null
        };
    }

    reqSendClick = (e) => {
        this.setState({reqSend: e});
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <div className={"commentDiv"}>
                            <Goal comment={"전자 결재 신청"}/>
                            <DocPayment reqSend={this.state.reqSend} reqSendClick={this.reqSendClick}/>
                            <DocPaymentBtn reqSend={this.state.reqSend} reqSendClick={this.reqSendClick}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DocReqDetail;
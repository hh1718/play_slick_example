import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ButtonSample from '../common/ButtonSample';
import { TopState } from '../../modules/top'
import { topActions } from '../../container/topContainer'
import { AccountReq } from '../../api/dataModels'

export interface OwnProps{}
type TopProps = OwnProps & TopState & topActions;
export interface OwnState{}

export class TopComponent extends React.Component<TopProps, OwnState> {
  constructor(props: any){
    super(props)
    this.state ={}
  }
  render() {
    return (
      <div>
        <h1>top page</h1>
        <ButtonSample str={"クリックしてや"}></ButtonSample>
        <ButtonSample str={"クリックしてや"}></ButtonSample>
        <ButtonSample str={"クリックしてや"}></ButtonSample>
        <section>
          <p>id: <span style={{color: "#f08300"}}>{this.props.account.id}</span></p>
          <p>name: <span style={{color: "#f08300"}}>{this.props.account.name}</span></p>
          <button onClick={(e) => this.props.fetchAccount({param: String(this.props.countTop)} as AccountReq)} style={{background: "#165e83", color:"#fff"}}>fetch account</button>
          <button onClick={(e) => this.props.fetchAccountFailed({param: "2"} as AccountReq)} style={{background: "#00a497" , color:"#fff"}}>fetch account failed</button>
          <button onClick={(e) => this.props.updateCount(1)}>acoount id for fetch: {this.props.countTop} ※click to change id</button>
        </section>
      </div>    
    );
  }
}

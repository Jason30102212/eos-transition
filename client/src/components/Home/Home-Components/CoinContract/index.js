import React, { Component } from 'react';
import Gist from 'react-gist';


class CoinContract extends Component {
  render() {
    return (
      <div>
        <div className="container p-3">
          <div className="row">
            <div className="col-md-12">
              <ul className="remove-bullet">
                <li>
                  <div className="remove-bullet">
                    <h3 className="heading-style">EOS Profits Distributed</h3>
                    <p> -Rule: EOS tokens sent to the treasury and will be distributed to the holders of C-Tokens based on the percentage they hold.</p>
                    <p> -Example: 1000 C-Tokens are in circulation (this excludes the the amount of C-Tokens held in the treasure). 1000 EOS tokens are sent to the treasure for distribution. The holder of 500 C-Tokens (50% of circulation) will be sent 500 EOS (50%). The holder of 100 T-Tokens(10% of circulation) will be sent 10 C-Tokens. The Holder of 40% of T-Tokens will receive 400 EOS.</p>
                    <p> -Purpose: To give financial incentive to contributers of the platforms created. To raise funds for additional expansion</p>
                    <p> -Speculation: Ideally, CTokens will be distributed to people with the necessary skillsets to increase value of the platforms created, and those who continiously make contributions to these platforms. This will be hard to govern, however and will require mechanisms to ensure that contributors are incentivised to continue to add value.</p>
                    <p> -Speculation: There will most likely be issues of holders of the CTokens to just hold as a revenue stream without contribution. In the long run, this will be less of an issue, but initially, it should be minimised. </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="remove-bullet">
                <li>
                  <div className="remove-bullet">
                    <h3 className="heading-style">Max 1:1 Creation</h3>
                    <p> -Rule: For every 1 eos token deposited into the smart contract, a percentage of a C-Token will be created. The percentage created will be determined based on the vote of current C-Token holders. Each token holder will cast a vote. For a percent to be created, as well as whether a pecentage of a token should be created at all. Vote percentages for the creation of tokens are aggregated and coins are created and stored within the treasury for future distribution.</p>
                    <p>	-Example: A purchase of an eBook for 4 EOS is made. The aggregated vote to create C-tokens is above the 50% threshold, with a aggregate vote to create 50% C-tokens for every 100% of deposited within the treasury. 2 C-Tokens are created. The EOS is then distributed to C-Token holders based on their holding percentages.</p>
                    <p> -Purpose: To give an indication that the platform is still being productive and to ensure no 'hyper-inflation' to devalue the holdings of current holders.</p>
                    <p> -Speculation: When the EOS token value increase, inflation rate of the CToken should decrease. (Assuming sales that are stable). This will be due to lower amounts of EOS being run through the treasury.</p>
                    <p> -Speculation: Likewise, when the EOS token value decreases, this should lead to a greater rate of inflation of CTokens. This may be a problem that needs addressing</p>
                    <p> -Speculation:   </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="remove-bullet">
                <li>
                  <div className="remove-bullet">
                    <h3 className="heading-style">CToken Distribution by Vote</h3>
                    <p> -Rule: CTokens that are created when EOS Tokens are deposited to the smart contract will be held in the 'treasury'. Distribution will be decided upon vote. Possible distribution choices may be the choice to sell tokens for EOS, and have that EOS distributed to established T-Token holders, the choice to distribute to contributors</p>
                    <p> -Example: </p>
                    <p> -Purpose: </p>
                    <p> -Speculation: </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="remove-bullet">
                <li>
                  <div className="remove-bullet">
                    <h3 className="heading-style">Pseudo</h3>
                      <Gist id='1d118f0d9a91dde931d011fceab9cdca' />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="remove-bullet">
                <li>
                  <div className="remove-bullet">
                    <h3 className="heading-style">Notes</h3>
                    <p>Types of CToken purchases</p>
                    <ul>
                      <li>Private. Holders of tokens making private sales of circulating tokens to others. No contract interaction.</li>
                      <li>Treasury purchases. Making purchases of minted CTokens from the treasury. Must interact with the contract. EOS used to make purchase will be distributed to holders. </li>
                    </ul>
                    <p> -Purchases of CTokens from the treasure will probably not be able to create new CTokens, as this would cause a sort of infinite loop</p>
                    <p> -May need a large potential total supply of CTokens defined due to the eosio.token contract requiring it. This may eventually lead to a non inflationary coin if the contract becomes profitable enough.</p>
                    <p> -The EOSIO platform in the past has run into trouble in trying to allow token holders to vote on contributions. This has the potential of large holders of the token to vote for less effective solutions/ implementations that the holders have a stake in.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="remove-bullet">
                <li>
                  <div className="remove-bullet">
                    <h3 className="heading-style">References</h3>
                    <p>https://github.com/eoscostarica/eos-contracts</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ideas">
        </div>
        <div className="pseudo">

        </div>
      </div>
    )
  }
}

export default CoinContract;

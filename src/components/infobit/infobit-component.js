import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Chart from "react-google-charts";
import "react-tabs/style/react-tabs.css";
/*ESTILOS*/
import "./infobit-component.css";

class BitInfo extends React.Component {
  render() {
    return (
      <div class="divRightHeaderHome">
        <div class="chartsImgToptHeaderHome"></div>
        <div class="infoDivHeaderHome">
          <Tabs>
            <TabList>
              <Tab>COP</Tab>
              <Tab>USD</Tab>
              <Tab>EUR</Tab>
            </TabList>
            <TabPanel>
              <div class="infoDivDetHeaderHome">
                <h3>COP</h3>
                <p class="infoDivDetPrHeaderHome">10,890.05 COP</p>
                <div class="chartsHeaderHome">
                  <div class="chartsImgHeaderHome">
                    <Chart
                      width={"100%"}
                      height={"100%"}
                      chartType="LineChart"
                      loader={<div>Cargando...</div>}
                      data={[
                        ["x", "dogs"],
                        [0, 0],
                        [1, 10],
                        [2, 23],
                        [3, 17],
                        [4, 18],
                        [5, 9],
                        [6, 11],
                        [7, 27],
                        [8, 33],
                        [9, 40],
                        [10, 32],
                        [11, 35]
                      ]}
                      options={{
                        hAxis: {
                          title: ""
                        },
                        vAxis: {
                          title: ""
                        },
                        animation: {
                          duration: 1000,
                          easing: "out",
                          startup: true
                        }
                      }}
                      rootProps={{ "data-testid": "1" }}
                    />
                  </div>
                  <p>-1.01%</p>
                </div>
                <div class="chartsImgFootHeaderHome">
                  <img
                    src={require("../../assets/images/home/chart-bottom.png")}
                  ></img>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="infoDivDetHeaderHome">
                <h3>USD</h3>
                <p class="infoDivDetPrHeaderHome">9,437.05 USD</p>
                <div class="chartsHeaderHome">
                  <div class="chartsImgHeaderHome">
                    <Chart
                      width={"100%"}
                      height={"100%"}
                      chartType="LineChart"
                      loader={<div>Cargando...</div>}
                      data={[
                        ["x", "dogs"],
                        [0, 0],
                        [1, 13],
                        [2, 23],
                        [3, 33],
                        [4, 43],
                        [5, 53],
                        [6, 63],
                        [7, 73],
                        [8, 83],
                        [9, 93],
                        [10, 53],
                        [11, 13]
                      ]}
                      options={{
                        hAxis: {
                          title: ""
                        },
                        vAxis: {
                          title: ""
                        },
                        animation: {
                          duration: 1000,
                          easing: "out",
                          startup: true
                        }
                      }}
                      rootProps={{ "data-testid": "1" }}
                    />
                  </div>
                  <p>-1.01%</p>
                </div>
                <div class="chartsImgFootHeaderHome">
                  <img
                    src={require("../../assets/images/home/chart-bottom.png")}
                  ></img>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="infoDivDetHeaderHome">
                <h3>EUR</h3>
                <p class="infoDivDetPrHeaderHome">8,365.05 EUR</p>
                <div class="chartsHeaderHome">
                  <div class="chartsImgHeaderHome">
                    <Chart
                      width={"100%"}
                      height={"100%"}
                      chartType="LineChart"
                      loader={<div>Cargando...</div>}
                      data={[
                        ["x", "dogs"],
                        [0, 0],
                        [1, 33],
                        [2, 53],
                        [3, 63],
                        [4, 23],
                        [5, 93],
                        [6, 33],
                        [7, 33],
                        [8, 23],
                        [9, 13],
                        [10, 83],
                        [11, 73]
                      ]}
                      options={{
                        hAxis: {
                          title: ""
                        },
                        vAxis: {
                          title: ""
                        },
                        animation: {
                          duration: 1000,
                          easing: "out",
                          startup: true
                        }
                      }}
                      rootProps={{ "data-testid": "1" }}
                    />
                  </div>
                  <p>-1.01%</p>
                </div>
                <div class="chartsImgFootHeaderHome">
                  <img
                    src={require("../../assets/images/home/chart-bottom.png")}
                  ></img>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default BitInfo;

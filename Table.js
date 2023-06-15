const Table = () => {
  const { useState } = React;

  const [data, setData] = useState([
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ]);

  const printDataHandler = () => {
    console.log(data);
  };
  const dataChange = (e, r, c) => {
    console.log(r, c, e.target.value);
    setData((state) => {
      let newState = [...state];
      newState[r][c] = e.target.value;
      return newState;
    });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Month 1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Onboarding Call</td>
            <td>
              <input
                value={data[0][0]}
                onChange={(e) => {
                  dataChange(e, 0, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[0][1]}
                onChange={(e) => {
                  dataChange(e, 0, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[0][2]}
                onChange={(e) => {
                  dataChange(e, 0, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[0][3]}
                onChange={(e) => {
                  dataChange(e, 0, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[0][4]}
                onChange={(e) => {
                  dataChange(e, 0, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[0][5]}
                onChange={(e) => {
                  dataChange(e, 0, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Google Search Console Access</td>
            <td>
              <input
                value={data[1][0]}
                onChange={(e) => {
                  dataChange(e, 1, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[1][1]}
                onChange={(e) => {
                  dataChange(e, 1, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[1][2]}
                onChange={(e) => {
                  dataChange(e, 1, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[1][3]}
                onChange={(e) => {
                  dataChange(e, 1, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[1][4]}
                onChange={(e) => {
                  dataChange(e, 1, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[1][5]}
                onChange={(e) => {
                  dataChange(e, 1, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Google Analytics Access</td>
            <td>
              <input
                value={data[2][0]}
                onChange={(e) => {
                  dataChange(e, 2, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[2][1]}
                onChange={(e) => {
                  dataChange(e, 2, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[2][2]}
                onChange={(e) => {
                  dataChange(e, 2, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[2][3]}
                onChange={(e) => {
                  dataChange(e, 2, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[2][4]}
                onChange={(e) => {
                  dataChange(e, 2, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[2][5]}
                onChange={(e) => {
                  dataChange(e, 2, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>website access</td>
            <td>
              <input
                value={data[3][0]}
                onChange={(e) => {
                  dataChange(e, 3, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[3][1]}
                onChange={(e) => {
                  dataChange(e, 3, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[3][2]}
                onChange={(e) => {
                  dataChange(e, 3, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[3][3]}
                onChange={(e) => {
                  dataChange(e, 3, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[3][4]}
                onChange={(e) => {
                  dataChange(e, 3, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[3][5]}
                onChange={(e) => {
                  dataChange(e, 3, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Technical Audit</td>
            <td>
              <input
                value={data[4][0]}
                onChange={(e) => {
                  dataChange(e, 4, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[4][1]}
                onChange={(e) => {
                  dataChange(e, 4, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[4][2]}
                onChange={(e) => {
                  dataChange(e, 4, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[4][3]}
                onChange={(e) => {
                  dataChange(e, 4, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[4][4]}
                onChange={(e) => {
                  dataChange(e, 4, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[4][5]}
                onChange={(e) => {
                  dataChange(e, 4, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Anchor Text and Semantic analysis</td>
            <td>
              <input
                value={data[5][0]}
                onChange={(e) => {
                  dataChange(e, 5, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[5][1]}
                onChange={(e) => {
                  dataChange(e, 5, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[5][2]}
                onChange={(e) => {
                  dataChange(e, 5, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[5][3]}
                onChange={(e) => {
                  dataChange(e, 5, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[5][4]}
                onChange={(e) => {
                  dataChange(e, 5, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[5][5]}
                onChange={(e) => {
                  dataChange(e, 5, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Competitr analysis</td>
            <td>
              <input
                value={data[6][0]}
                onChange={(e) => {
                  dataChange(e, 6, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[6][1]}
                onChange={(e) => {
                  dataChange(e, 6, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[6][2]}
                onChange={(e) => {
                  dataChange(e, 6, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[6][3]}
                onChange={(e) => {
                  dataChange(e, 6, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[6][4]}
                onChange={(e) => {
                  dataChange(e, 6, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[6][5]}
                onChange={(e) => {
                  dataChange(e, 6, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Anchor text / URL Mapping</td>
            <td>
              <input
                value={data[7][0]}
                onChange={(e) => {
                  dataChange(e, 7, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[7][1]}
                onChange={(e) => {
                  dataChange(e, 7, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[7][2]}
                onChange={(e) => {
                  dataChange(e, 7, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[7][3]}
                onChange={(e) => {
                  dataChange(e, 7, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[7][4]}
                onChange={(e) => {
                  dataChange(e, 7, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[7][5]}
                onChange={(e) => {
                  dataChange(e, 7, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Google data studio report + Local Reporting Suite</td>
            <td>
              <input
                value={data[8][0]}
                onChange={(e) => {
                  dataChange(e, 8, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[8][1]}
                onChange={(e) => {
                  dataChange(e, 8, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[8][2]}
                onChange={(e) => {
                  dataChange(e, 8, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[8][3]}
                onChange={(e) => {
                  dataChange(e, 8, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[8][4]}
                onChange={(e) => {
                  dataChange(e, 8, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[8][5]}
                onChange={(e) => {
                  dataChange(e, 8, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Site level Optimization</td>
            <td>
              <input
                value={data[9][0]}
                onChange={(e) => {
                  dataChange(e, 9, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[9][1]}
                onChange={(e) => {
                  dataChange(e, 9, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[9][2]}
                onChange={(e) => {
                  dataChange(e, 9, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[9][3]}
                onChange={(e) => {
                  dataChange(e, 9, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[9][4]}
                onChange={(e) => {
                  dataChange(e, 9, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[9][5]}
                onChange={(e) => {
                  dataChange(e, 9, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>On Page Optimization</td>
            <td>
              <input
                value={data[10][0]}
                onChange={(e) => {
                  dataChange(e, 10, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[10][1]}
                onChange={(e) => {
                  dataChange(e, 10, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[10][2]}
                onChange={(e) => {
                  dataChange(e, 10, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[10][3]}
                onChange={(e) => {
                  dataChange(e, 10, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[10][4]}
                onChange={(e) => {
                  dataChange(e, 10, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[10][5]}
                onChange={(e) => {
                  dataChange(e, 10, 5);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Content creation</td>
            <td>
              <input
                value={data[11][0]}
                onChange={(e) => {
                  dataChange(e, 11, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[11][1]}
                onChange={(e) => {
                  dataChange(e, 11, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[11][2]}
                onChange={(e) => {
                  dataChange(e, 11, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[11][3]}
                onChange={(e) => {
                  dataChange(e, 11, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[11][4]}
                onChange={(e) => {
                  dataChange(e, 11, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[11][5]}
                onChange={(e) => {
                  dataChange(e, 11, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Content publishing</td>
            <td>
              <input
                value={data[12][0]}
                onChange={(e) => {
                  dataChange(e, 12, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[12][1]}
                onChange={(e) => {
                  dataChange(e, 12, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[12][2]}
                onChange={(e) => {
                  dataChange(e, 12, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[12][3]}
                onChange={(e) => {
                  dataChange(e, 12, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[12][4]}
                onChange={(e) => {
                  dataChange(e, 12, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[12][5]}
                onChange={(e) => {
                  dataChange(e, 12, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Premium press release</td>
            <td>
              <input
                value={data[13][0]}
                onChange={(e) => {
                  dataChange(e, 13, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[13][1]}
                onChange={(e) => {
                  dataChange(e, 13, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[13][2]}
                onChange={(e) => {
                  dataChange(e, 13, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[13][3]}
                onChange={(e) => {
                  dataChange(e, 13, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[13][4]}
                onChange={(e) => {
                  dataChange(e, 13, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[13][5]}
                onChange={(e) => {
                  dataChange(e, 13, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Authority Nitch Placements</td>
            <td>
              <input
                value={data[14][0]}
                onChange={(e) => {
                  dataChange(e, 14, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[14][1]}
                onChange={(e) => {
                  dataChange(e, 14, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[14][2]}
                onChange={(e) => {
                  dataChange(e, 14, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[14][3]}
                onChange={(e) => {
                  dataChange(e, 14, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[14][4]}
                onChange={(e) => {
                  dataChange(e, 14, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[14][5]}
                onChange={(e) => {
                  dataChange(e, 14, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Review management</td>
            <td>
              <input
                value={data[15][0]}
                onChange={(e) => {
                  dataChange(e, 15, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[15][1]}
                onChange={(e) => {
                  dataChange(e, 15, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[15][2]}
                onChange={(e) => {
                  dataChange(e, 15, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[15][3]}
                onChange={(e) => {
                  dataChange(e, 15, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[15][4]}
                onChange={(e) => {
                  dataChange(e, 15, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[15][5]}
                onChange={(e) => {
                  dataChange(e, 15, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Index links</td>
            <td>
              <input
                value={data[16][0]}
                onChange={(e) => {
                  dataChange(e, 16, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[16][1]}
                onChange={(e) => {
                  dataChange(e, 16, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[16][2]}
                onChange={(e) => {
                  dataChange(e, 16, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[16][3]}
                onChange={(e) => {
                  dataChange(e, 16, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[16][4]}
                onChange={(e) => {
                  dataChange(e, 16, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[16][5]}
                onChange={(e) => {
                  dataChange(e, 16, 5);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Video Recap</td>
            <td>
              <input
                value={data[17][0]}
                onChange={(e) => {
                  dataChange(e, 17, 0);
                }}
              />
            </td>
            <td>
              <input
                value={data[17][1]}
                onChange={(e) => {
                  dataChange(e, 17, 1);
                }}
              />
            </td>
            <td>
              <input
                value={data[17][2]}
                onChange={(e) => {
                  dataChange(e, 17, 2);
                }}
              />
            </td>
            <td>
              <input
                value={data[17][3]}
                onChange={(e) => {
                  dataChange(e, 17, 3);
                }}
              />
            </td>
            <td>
              <input
                value={data[17][4]}
                onChange={(e) => {
                  dataChange(e, 17, 4);
                }}
              />
            </td>
            <td>
              <input
                value={data[17][5]}
                onChange={(e) => {
                  dataChange(e, 17, 5);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={printDataHandler}
        style={{
          margin: "50px auto",
          backgroundColor: "yellow",
          padding: "10px",
        }}
      >
        Post to API - print on console
      </button>
    </div>
  );
};

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function Edittt() {
  return (
    <>
      <table border="1" cellspacing="5" cellpadding="5">
        <th>Days/Timings</th>
        <th>
          <table cellSpacing="10">
            <tr>
              <td>From: </td>
              <td>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker"]}>
                    <TimePicker label="Basic time picker" />
                  </DemoContainer>
                </LocalizationProvider>
              </td>
            </tr>
            <tr>
              <td>To: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
          </table>
        </th>
        <th>
          <table cellSpacing="10">
            <tr>
              <td>From: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
            <tr>
              <td>To: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
          </table>
        </th>
        <th>
          <table cellSpacing="10">
            <tr>
              <td>From: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
            <tr>
              <td>To: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
          </table>
        </th>
        <th>
          <table cellSpacing="10">
            <tr>
              <td>From: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
            <tr>
              <td>To: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
          </table>
        </th>
        <th>
          <table cellSpacing="10">
            <tr>
              <td>From: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
            <tr>
              <td>To: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
          </table>
        </th>
        <th>
          <table cellSpacing="10">
            <tr>
              <td>From: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
            <tr>
              <td>To: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
          </table>
        </th>
        <th>
          <table cellSpacing="10">
            <tr>
              <td>From: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
            <tr>
              <td>To: </td>
              <td>
                <input type="time" />
              </td>
            </tr>
          </table>
        </th>
        <tr>
          <td>Tuesday</td>
          <td>
            <button class="dropdown">
              <select class="dropdown">
                <option>1</option>
                <option>2</option>
              </select>
            </button>
          </td>
          <td>
            <button class="dropdown">
              <select class="dropdown">
                <option>1</option>
                <option>2</option>
              </select>
            </button>
          </td>
          <td>
            <button class="dropdown">
              <select class="dropdown">
                <option>1</option>
                <option>2</option>
              </select>
            </button>
          </td>
          <td>
            <button class="dropdown">
              <select class="dropdown">
                <option>1</option>
                <option>2</option>
              </select>
            </button>
          </td>
          <td>
            <button class="dropdown">
              <select class="dropdown">
                <option>1</option>
                <option>2</option>
              </select>
            </button>
          </td>
          <td>
            <button class="dropdown">
              <select class="dropdown">
                <option>1</option>
                <option>2</option>
              </select>
            </button>
          </td>
          <td>
            <select>
              <option>21CS71</option>
            </select>
          </td>
        </tr>
      </table>
    </>
  );
}

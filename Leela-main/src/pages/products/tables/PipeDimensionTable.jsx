import {
  PIPE_SCHEDULES,
  PIPE_DIMENSION_DATA,
} from "../../../data/productSpecifications";

export default function PipeDimensionTable() {
  return (
    <div className="exact-table-card">
      <div className="exact-table-scroll-wrapper">
        <table
          className="exact-grid-table"
          aria-label="Pipe Dimension – Schedule, Wall Thickness & Weight Chart"
        >
          <thead>
            {/* Header Row 1 */}
            <tr>
              <th rowSpan={2} style={{ minWidth: "100px" }}>
                Nominal Pipe Size (mm)
              </th>
              <th rowSpan={2} style={{ minWidth: "90px" }}>
                Nominal (Inch)
              </th>
              <th rowSpan={2} style={{ minWidth: "100px" }}>
                Outside Diameter (mm)
              </th>
              <th rowSpan={2} style={{ minWidth: "100px" }}>
                Outside Diameter (Inch)
              </th>
              {PIPE_SCHEDULES.map((sch) => (
                <th key={sch.key} colSpan={2} style={{ minWidth: "140px" }}>
                  {sch.label}
                </th>
              ))}
            </tr>

            {/* Header Row 2: Sub-columns */}
            <tr>
              {PIPE_SCHEDULES.flatMap((sch) => [
                <th key={`${sch.key}-thick`} style={{ minWidth: "75px" }}>
                  Wall Thick
                </th>,
                <th key={`${sch.key}-wt`} style={{ minWidth: "85px" }}>
                  Weight Kg/Mtr.
                </th>,
              ])}
            </tr>
          </thead>
          <tbody>
            {PIPE_DIMENSION_DATA.map((row, idx) => (
              <tr key={idx}>
                <td style={{ fontWeight: 600 }}>{row.npsMm}</td>
                <td style={{ fontWeight: 600 }}>{row.npsInch}</td>
                <td>{row.odMm}</td>
                <td>{row.odInch}</td>

                {/* Sch 5S */}
                <td className={row.sch5s.thick === "-" ? "cell-dash" : ""}>
                  {row.sch5s.thick}
                </td>
                <td className={row.sch5s.weight === "-" ? "cell-dash" : ""}>
                  {row.sch5s.weight}
                </td>

                {/* Sch 10S */}
                <td className={row.sch10s.thick === "-" ? "cell-dash" : ""}>
                  {row.sch10s.thick}
                </td>
                <td className={row.sch10s.weight === "-" ? "cell-dash" : ""}>
                  {row.sch10s.weight}
                </td>

                {/* Sch 20S */}
                <td className={row.sch20s.thick === "-" ? "cell-dash" : ""}>
                  {row.sch20s.thick}
                </td>
                <td className={row.sch20s.weight === "-" ? "cell-dash" : ""}>
                  {row.sch20s.weight}
                </td>

                {/* Sch 40S */}
                <td className={row.sch40s.thick === "-" ? "cell-dash" : ""}>
                  {row.sch40s.thick}
                </td>
                <td className={row.sch40s.weight === "-" ? "cell-dash" : ""}>
                  {row.sch40s.weight}
                </td>

                {/* Sch 80S */}
                <td className={row.sch80s.thick === "-" ? "cell-dash" : ""}>
                  {row.sch80s.thick}
                </td>
                <td className={row.sch80s.weight === "-" ? "cell-dash" : ""}>
                  {row.sch80s.weight}
                </td>

                {/* Sch 160S */}
                <td className={row.sch160s.thick === "-" ? "cell-dash" : ""}>
                  {row.sch160s.thick}
                </td>
                <td className={row.sch160s.weight === "-" ? "cell-dash" : ""}>
                  {row.sch160s.weight}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


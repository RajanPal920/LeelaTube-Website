import { PROCESS_FLOW_ROWS } from "../../data/qualityData";

export default function ProcessFlowTableSection() {
  return (
    <section id="process-flow-table" className="process-flow-table-section">
      <div className="container">
        {/* Section Header */}
        <div className="quality-section-header">
          <span className="spec-category-badge">Comprehensive Quality Assurance Plan</span>
          <h2 className="display-md" style={{ marginTop: "8px", marginBottom: "12px" }}>
            Manufacturing Process &amp; Quality Inspection
          </h2>
          <p className="body-lg" style={{ maxWidth: "800px", margin: "0 auto 28px" }}>
            Stage-wise quality inspection flow chart covering incoming raw materials, in-process
            manufacturing controls, metallurgical testing, and final dispatch release.
          </p>
        </div>

        {/* Unified Single Table Container */}
        <div className="process-flow-table-card">
          <div className="table-scroll-cue-bar">
            <span>⇄ Scroll horizontally to view all inspection parameters and acceptance criteria</span>
          </div>

          <div className="process-flow-scroll-wrap">
            <table
              className="unified-process-flow-table"
              aria-label="Manufacturing Process & Quality Inspection Table"
            >
              <thead>
                <tr>
                  <th style={{ width: "65px", minWidth: "60px", textAlign: "center" }}>
                    Sr. No.
                  </th>
                  <th style={{ minWidth: "180px", textAlign: "left" }}>
                    Process Description
                  </th>
                  <th style={{ minWidth: "170px", textAlign: "left" }}>
                    Ref. Documents Standards
                  </th>
                  <th style={{ minWidth: "220px", textAlign: "left" }}>
                    Characteristic to be Checked
                  </th>
                  <th style={{ minWidth: "170px", textAlign: "left" }}>
                    Samples Quorum of Size/Inspection
                  </th>
                  <th style={{ minWidth: "240px", textAlign: "left" }}>
                    Instrument Equipment Used for Testing
                  </th>
                  <th style={{ minWidth: "190px", textAlign: "left" }}>
                    Acceptance Criteria
                  </th>
                </tr>
              </thead>
              <tbody>
                {PROCESS_FLOW_ROWS.map((row) => (
                  <tr
                    key={row.srNo}
                    className={`process-row-${row.rowColor}`}
                  >
                    <td style={{ textAlign: "center", fontWeight: 700 }}>
                      {row.srNo}
                    </td>
                    <td style={{ fontWeight: 600 }}>{row.process}</td>
                    <td>{row.refStandard}</td>
                    <td>{row.characteristic}</td>
                    <td>{row.sampleSize}</td>
                    <td>{row.equipment}</td>
                    <td>{row.acceptanceCriteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quality Certification Footer Note */}
        <div
          className="spec-note-inner"
          style={{ marginTop: "32px", background: "#f8fafc" }}
        >
          <div className="spec-note-icon">📋</div>
          <div style={{ flex: 1 }}>
            <h4 className="heading-sm" style={{ marginBottom: "6px" }}>
              Standard Inspection &amp; Mill Test Certification (EN 10204 3.1)
            </h4>
            <p className="body-md">
              Every production lot at Leela Tubes undergoes mandatory testing strictly compliant with
              the above Quality Plan. Certified Mill Test Reports (MTC 3.1 / 3.2), third-party inspection
              reports (TUV, DNV, SGS, BV), and ultrasonic/eddy-current test charts are furnished with each order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


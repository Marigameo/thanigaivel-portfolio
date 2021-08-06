import React from "react"
import styles from "./certificates.module.css"

const certificates = [
  {
    id: 1,
    name:
      "Microsoft Certified Technology Specialist: .NET Framework 2.0 -Application Development Foundation (MCTS)",
  },
  {
    id: 2,
    name:
      "Microsoft Certified Technology Specialist: .NET Framework 2.0 -Windows Based Client Development (MCTS)",
  },
  {
    id: 3,
    name: "CCNA - Cisco Certified Network Professional",
  },
]

export default function certifications() {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Certifications</h3>
      <div className={styles.cardsContainer}>
        {certificates.map(certificate => {
          return (
            <div className={styles.card} key={certificate.id}>
              <p>{certificate.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

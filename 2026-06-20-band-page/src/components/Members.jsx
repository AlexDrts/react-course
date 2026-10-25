function Members({ members }) {
    return (
        <section className="section">
            <h2>👥 Учасники гурту</h2>

            <div className="members">
                {members.map((member, index) => (
                    <div className="member" key={index}>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Members;
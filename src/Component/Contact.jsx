import "./Contact.css"
function Contact (props) {
    return (
        <div>
            <h1>Contact</h1>
            <div className="fl">
                <form>
                    <p className="name">Name</p>
                    <input type="text" placeholder="Name" />
                    <p className="email">Email</p>
                    <input type="text" placeholder="Email" />
                    <p className="message">Message</p>
                    <input type="text" placeholder="Message" />
                </form>
            </div>
            <div className="btn">
                <button>Send</button>
            </div>
        </div>
    )
}
export default Contact;
const Contact = () => {
    return (
        <>
            <h2>Contact Me</h2>
            <form>
                <input type="text" placeholder="Name..." required></input>
                <input type="email" placeholder="Email..." required></input>
                <textarea placeholder="Message..." required></textarea>
                <button>Submit</button>
            </form>
        </>
    );
}

export default Contact;
import FooterIntro from "./FooterIntro"
const Footer = () => {
    const footerStyles = {
        background: 'url(/assets/footer/footer.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="footer" style={footerStyles}>
            <div className="footer__container">
                <div className="footer__container__block">
                    <div className="row mr-minus-15 ml-minus-15">
                        <div className="col-6 p-15">
                            <FooterIntro />
                        </div>
                        <div className="col-6 p-15"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
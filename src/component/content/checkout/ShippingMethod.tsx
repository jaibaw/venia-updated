function ShippingMethod() {

    return (
        <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                <div className='checkout__methods__div '>
                    <label>
                        2. Shipping Method
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="favShow"
                        value="Ted Lasso"
                        checked={true}
                        className="form-check-input"
                        id="ted-lasso"
                    />
                    <label htmlFor="ted-lasso">
                        Standard Shipping (4-8 business days via USPS) FREE
                    </label>
                </div>

                <div className="form-check">
                    <input
                        type="radio"
                        name="favShow"
                        value="GOT"
                        className="form-check-input"
                        id="got"
                    />
                    <label htmlFor="got">
                        Express Delivery (2-5 business days via USPS) $17.95
                    </label>
                </div>

                <div className="form-check">
                    <input
                        type="radio"
                        name="favShow"
                        value="Breaking Bad"
                        className="form-check-input"
                        id="breadking-bad"
                    />
                    <label htmlFor="breadking-bad">
                        Next Day Delivery (Next business days via FedEx) $53.61
                    </label>
                </div>
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                        <div>
                            <button  type="submit" className="checkout__step2__btn">
                                CONTINUE TO PAYMENT
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShippingMethod;
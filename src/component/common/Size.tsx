import { SIZE } from "../../constant/common";

//size component
function Size() {
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                {
                    SIZE.map((key) => {
                        return (
                            <div className="aem-GridColumn aem-GridColumn--default--1  aem-GridColumn--phone--2">
                                <div className="box">
                                    <div className="box-span">
                                        <span >{key.img}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Size;

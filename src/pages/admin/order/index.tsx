import { IProduct } from "../../../interfaces/product.interface";

interface IManageOrder {
    orders: IProduct[];
}

const ManageOrder = (props: IManageOrder) => {
    return (
        <section className="w-100 h-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="">
                        <div className="card" style={{ borderRadius: "10px" }}>
                            <div className="card-body p-4">
                                <div className="card shadow-0 border mb-4">
                                    {props.orders.map((elem, key) => {
                                        return (
                                            <div
                                                key={key}
                                                className="card-body"
                                            >
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <img
                                                            src={
                                                                elem
                                                                    .productImageFiles[0]
                                                                    .url
                                                            }
                                                            className="img-fluid"
                                                            alt="Phone"
                                                        />
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0">
                                                            {elem.name}
                                                        </p>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0 small">
                                                            {
                                                                elem
                                                                    .productType[0]
                                                                    .name
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0 small">
                                                            {elem.category}
                                                        </p>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0 small">
                                                            {
                                                                elem
                                                                    .productType[0]
                                                                    .price
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <hr
                                                    className="mb-4"
                                                    style={{
                                                        backgroundColor:
                                                            "#e0e0e0",
                                                        opacity: 1,
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div
                                className="card-footer border-0 px-4 py-5"
                                style={{
                                    backgroundColor: "rgb(238, 77, 45)",
                                    borderBottomLeftRadius: "10px",
                                    borderBottomRightRadius: "10px",
                                }}
                            >
                                <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                                    Tổng:
                                    <span className="h2 mb-0 ms-2">
                                        {props.orders.reduce(
                                            (calc, elem) =>
                                                (calc +=
                                                    elem.productType[0].price),
                                            0
                                        )}
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageOrder;

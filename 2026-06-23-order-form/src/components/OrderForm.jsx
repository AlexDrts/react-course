import { useActionState } from "react";

function OrderForm() {

    const [state, formAction, isPending] = useActionState(
        async (previousState, formData) => {

            const name = formData.get("name");
            const phone = formData.get("phone");
            const email = formData.get("email");
            const product = formData.get("product");
            const quantity = formData.get("quantity");
            const delivery = formData.get("delivery");

            await new Promise((resolve) => {
                setTimeout(resolve, 1500);
            });

            if (!name || !phone || !email || !product) {
                return {
                    success: false,
                    message: "Заповніть усі обов'язкові поля."
                };
            }

            return {
                success: true,
                message: "Замовлення успішно створено!",
                order: {
                    name,
                    phone,
                    email,
                    product,
                    quantity,
                    delivery
                }
            };
        },
        null
    );

    return (
        <div className="order-container">

            <h1>🛒 TechMarket</h1>

            <h2>Оформлення замовлення</h2>

            <form action={formAction}>

                <div className="form-group">
                    <label htmlFor="name">
                        ПІБ
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Введіть ваше ім'я"
                        disabled={isPending}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">
                        Телефон
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+380..."
                        disabled={isPending}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        E-mail
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@gmail.com"
                        disabled={isPending}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="product">
                        Товар
                    </label>

                    <select
                        id="product"
                        name="product"
                        disabled={isPending}
                    >
                        <option value="">
                            Оберіть товар
                        </option>

                        <option value="Samsung Galaxy S23">
                            Samsung Galaxy S23
                        </option>

                        <option value="iPhone 15">
                            iPhone 15
                        </option>

                        <option value="MacBook Air">
                            MacBook Air
                        </option>

                        <option value="Sony PlayStation 5">
                            Sony PlayStation 5
                        </option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">
                        Кількість
                    </label>

                    <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        min="1"
                        defaultValue="1"
                        disabled={isPending}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="delivery">
                        Спосіб доставки
                    </label>

                    <select
                        id="delivery"
                        name="delivery"
                        disabled={isPending}
                    >
                        <option value="Нова Пошта">
                            Нова Пошта
                        </option>

                        <option value="Кур'єр">
                            Кур'єр
                        </option>

                        <option value="Самовивіз">
                            Самовивіз
                        </option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                >
                    {isPending
                        ? "Обробка замовлення..."
                        : "Створити замовлення"}
                </button>

            </form>

            {state && (
                <div
                    className={
                        state.success
                            ? "result success"
                            : "result error"
                    }
                >
                    <h3>
                        {state.success
                            ? "✅ Успішно!"
                            : "❌ Помилка"}
                    </h3>

                    <p>{state.message}</p>

                    {state.success && (
                        <div className="order-result">
                            <p>
                                <b>Покупець:</b>{" "}
                                {state.order.name}
                            </p>

                            <p>
                                <b>Товар:</b>{" "}
                                {state.order.product}
                            </p>

                            <p>
                                <b>Кількість:</b>{" "}
                                {state.order.quantity}
                            </p>

                            <p>
                                <b>Доставка:</b>{" "}
                                {state.order.delivery}
                            </p>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}

export default OrderForm;
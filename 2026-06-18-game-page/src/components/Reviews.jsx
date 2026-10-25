import { useState } from "react";

function Reviews() {
    const [showReviews, setShowReviews] = useState(false);

    return (
        <section className="reviews">
            <h2>⭐ Відгуки про гру</h2>

            <button onClick={() => setShowReviews(!showReviews)}>
                {showReviews ? "Сховати відгуки" : "Показати відгуки"}
            </button>

            {showReviews && (
                <div className="review-list">

                    <div className="review">
                        <h3>Олексій ⭐⭐⭐⭐⭐</h3>
                        <p>
                            Дуже цікава гра. Найбільше подобається
                            будувати будинки та грати з друзями.
                        </p>
                    </div>

                    <div className="review">
                        <h3>Максим ⭐⭐⭐⭐⭐</h3>
                        <p>
                            Подобається величезний світ та велика
                            кількість можливостей для будівництва.
                        </p>
                    </div>

                    <div className="review">
                        <h3>Андрій ⭐⭐⭐⭐</h3>
                        <p>
                            Цікава гра, у яку можна грати дуже довго,
                            тому що кожен раз можна придумувати щось нове.
                        </p>
                    </div>

                </div>
            )}
        </section>
    );
}

export default Reviews;
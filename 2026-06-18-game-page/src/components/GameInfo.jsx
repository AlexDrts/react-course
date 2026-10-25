function GameInfo({ developer, genre, year, platforms }) {
    return (
        <section className="info">
            <h2>🎮 Про гру</h2>

            <p>
                <b>Розробник:</b> {developer}
            </p>

            <p>
                <b>Жанр:</b> {genre}
            </p>

            <p>
                <b>Рік виходу:</b> {year}
            </p>

            <p>
                <b>Платформи:</b> {platforms}
            </p>

            <h3>Опис</h3>

            <p>
                Minecraft — це популярна гра-пісочниця з відкритим світом.
                Гравець може досліджувати світ, добувати ресурси,
                будувати будинки та створювати різні предмети.
            </p>

            <p>
                У грі є різні режими. У Survival потрібно збирати ресурси
                та виживати, а в Creative можна вільно будувати,
                використовуючи доступні блоки.
            </p>
        </section>
    );
}

export default GameInfo;
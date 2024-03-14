import React from "react";

export default function ReceiptList({ receipts }) {
  console.log(receipts);
  return (
    <>
      <h1>Рецепты</h1>
      <div>
        {receipts.map((user, index) =>
          user.recepties.map((receipt) => (
            <div class="recipe-card">
              <div class="recipe-image">
                <img src={receipt.receptImage} alt="Сырники из творога" />
              </div>
              <div class="recipe__content">
                <ul className="recipe__tags">
                  {receipt.receptTags.map((tag) => (
                    <li className="receipt__tag-item">{tag}</li>
                  ))}
                </ul>
                <h2 class="recipe__title">{receipt.receptName}</h2>
                <div className="recipe__info-box">
                  <div class="receipe__author">Автор: {user.username}</div>
                  <div class="recipe__info">
                    <button class="recipe__ingredients">{receipt.receptIngredients.length} ингредиентов</button>
                     <span class="recipe__servings">2 порции</span>{/* должно быть из базы */}
                    <span class="recipe__time">{receipt.receptTime} минут</span>
                  </div>
                </div>
                {/* <div class="recipe-stats">
                  <span class="recipe-views">27,691 просмотров</span>
                  <span class="recipe-likes">3,032 лайков</span>
                  <span class="recipe-comments">308 комментариев</span>
                </div>
                <button class="recipe-save">Добавить в книгу рецептов</button> */}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

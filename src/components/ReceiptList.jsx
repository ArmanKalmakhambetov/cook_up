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
              <div class="recipe-content">
                <div className="recipe__tags">{receipt.receptTags.map(tag => (
                    <div className="receipt__tag-item">{tag}</div>
                ))}</div>
                <h2 class="recipe-title">Сырники из творога</h2>
                <div class="recipe-author">Автор: Алексей Соколенко</div>
                <div class="recipe-info">
                  <span class="recipe-ingredients">5 ингредиентов</span>
                  <span class="recipe-servings">2 порции</span>
                  <span class="recipe-time">30 минут</span>
                </div>
                <div class="recipe-stats">
                  <span class="recipe-views">27,691 просмотров</span>
                  <span class="recipe-likes">3,032 лайков</span>
                  <span class="recipe-comments">308 комментариев</span>
                </div>
                <button class="recipe-save">Добавить в книгу рецептов</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

# ТЗ: Сайт ECU Protocol (ecu-token-info)

## Цель

Переделать текущий сайт ecu-token-info так, чтобы он выглядел как **полноценный сайт протокола для пользователей**, а не как страница для модерации Tonkeeper.

Сайт должен:

- объяснять назначение протокола ECU на абстрактном уровне
- содержать ссылки на on-chain контракты
- иметь понятную структуру продукта
- поддерживать **два языка (EN / RU)**
- корректно отображаться для модерации Tonkeeper

---

## Ограничения конфиденциальности (критично)

**На сайте не должно быть:**

- упоминаний купюр, банкнот, cash notes
- описаний mint / redeem / buy / accept
- ссылок на ecu-ton.vercel.app или веб-приложение
- конкретики о «цифровых объектах» (что именно создаётся)
- терминов vault, exchange, cash controller

**Допустимые абстракции:**

- «цифровые объекты» — без уточнения
- «операции смарт-контрактов»
- «взаимодействие пользователей с протоколом»
- «utility-токен», «служебная единица»

---

# 1. Общая структура сайта

Сайт — **одностраничный (single page)**.

Порядок блоков:

1. Header
2. Hero
3. About ECU
4. ECU Protocol
5. On-chain Contracts
6. On-chain Transparency
7. Why TON
8. Community
9. Footer
10. Disclaimer

---

# 2. Верхняя панель (Header)

Верхнее меню:

```
ECU Protocol

About    Protocol    Contracts    Community
```

Справа:

```
RU | EN
```

- Переключение языка **без перезагрузки страницы**
- По умолчанию — **EN**
- Пункты меню ведут к якорям (#about, #protocol, #contracts, #community)

---

# 3. Hero

**Заголовок:**

ECU Protocol

**Подзаголовок:**

Utility-token infrastructure on TON

**Строка под подзаголовком (бонус для модераторов):**

Running on TON Mainnet

**Текст (один абзац, без повторов с About):**

ECU (Electronic Coin Unit) — служебный токен сети TON, используемый в смарт-контрактах протокола ECU. Протокол выполняет on-chain операции с цифровыми объектами, создаваемыми и управляемыми через контрактную логику. ECU используется как внутренняя единица операций протокола при взаимодействии пользователей с системой. Все операции выполняются в блокчейне TON и проверяются через публичные обозреватели. ECU не является инвестиционным инструментом.

**Кнопки под текстом:**

| Текст кнопки | Действие |
|--------------|----------|
| Jetton Master | Tonviewer Jetton Master |
| Utility Contract | Tonviewer Utility Contract |
| Telegram | Telegram-канал |

---

# 4. Блок About ECU

**Заголовок:**

What is ECU / Что такое ECU

**Текст (отличается от Hero — фокус на токене):**

ECU — служебный токен протокола ECU в сети TON. Токен используется внутри системы для операций, предусмотренных контрактной логикой, и при взаимодействии пользователей со смарт-контрактами. ECU применяется исключительно внутри протокола и не предназначен для использования вне его логики.

---

# 5. Блок ECU Protocol

**Заголовок:**

How the protocol works / Как работает протокол

**Текст:**

ECU Protocol — система смарт-контрактов в основной сети TON. Контракты обеспечивают выполнение операций с цифровыми объектами, создаваемыми через контрактную логику. Пользователи взаимодействуют с протоколом напрямую через блокчейн. Все операции выполняются on-chain и проверяются через публичные обозреватели. Такой подход обеспечивает прозрачность и исключает необходимость доверия к централизованным сервисам.

---

# 6. Блок On-chain Contracts

**Заголовок:**

Protocol contracts / Контракты протокола

**Описание секции:**

Основные компоненты ECU работают в сети TON и доступны для проверки через публичные обозреватели блокчейна.

**Карточка 1 — Jetton Master**

- **Заголовок:** Jetton Master
- **Описание:** Основной контракт токена ECU. Определяет параметры токена и обеспечивает создание jetton-кошельков пользователей.
- **Кнопка:** View on Tonviewer

**Карточка 2 — Utility Contract**

- **Заголовок:** Utility Contract
- **Описание:** Контракт протокола ECU, обеспечивающий выполнение операций протокола и взаимодействие со смарт-контрактами протокола.
- **Кнопка:** View on Tonviewer

---

# 7. Блок On-chain Transparency

**Заголовок:**

System transparency / Прозрачность системы

**Текст:**

Протокол ECU работает полностью on-chain в сети TON. Все транзакции, связанные с токеном ECU и операциями протокола, доступны через публичные обозреватели блокчейна. Любой пользователь может проверить работу системы, просмотреть контракты и убедиться в прозрачности операций.

---

# 8. Блок Why TON

**Заголовок:**

Why TON / Почему TON

**Текст:**

Сеть TON предоставляет открытую архитектуру смарт-контрактов и позволяет строить полностью on-chain протоколы. Благодаря интеграции с пользовательскими кошельками и высокой скорости работы, TON подходит для реализации прикладных протоколов, в которых ключевые операции выполняются в блокчейне. ECU Protocol использует возможности TON для прозрачной и проверяемой работы системы.

---

# 9. Блок Community

**Заголовок:**

Community / Сообщество

**Текст:**

Официальные обновления ECU Protocol публикуются в Telegram-канале проекта.

**Кнопка:** Telegram

---

# 10. Footer

**Текст:**

ECU Protocol  
Running on TON Mainnet  
TON Mainnet

**Ссылки:**

- Jetton Master
- Utility Contract
- Telegram

---

# 11. Disclaimer

**Текст:**

Информация на данном сайте предоставлена исключительно в информационных целях. ECU является utility-токеном, используемым внутри протокола ECU для выполнения операций смарт-контрактов. Токен не представляет собой инвестиционный инструмент и не предоставляет финансовых гарантий.

---

# 12. Переключение языков

**Элемент:** `EN | RU` (или `RU | EN` в зависимости от текущего языка)

**Требования:**

- переключение без reload
- одинаковая структура для EN и RU
- переводы всех текстов (Hero, About, Protocol, Contracts, Transparency, Why TON, Community, Footer, Disclaimer)
- по умолчанию — EN

---

# 13. Дизайн

**Стиль:** минималистичный, тёмная тема.

**Параметры:**

- тёмный фон
- чистая типографика
- блоки с отступами
- кнопки Tonviewer / Telegram — лаконичные, без маркетингового стиля

**Запрещено:**

- маркетинговые баннеры
- анимации
- цифры holders
- «early stage»
- «experimental»

---

# 14. Запрещённые элементы

На сайте **не должно быть:**

- слова «experimental»
- слова «early stage»
- цифр holders
- snapshot activity
- обещаний доходности
- ссылок на веб-приложение ecu-ton
- конкретики о купюрах, mint, redeem, exchange

---

# 15. Технические требования

- адаптивность (desktop + mobile)
- быстрый рендер
- все ссылки рабочие
- Tonviewer открывается корректно
- Telegram открывается без редиректов
- meta title: «ECU Protocol — Utility-token infrastructure on TON» (не «Token Info»)
- meta description: нейтральное описание протокола без «verification», «token info»

---

# 16. Тексты для перевода (EN / RU)

## Hero

| EN | RU |
|----|-----|
| ECU (Electronic Coin Unit) is a utility token of the TON network, used in ECU Protocol smart contracts. The protocol performs on-chain operations with digital objects created and managed through contract logic. ECU is used as the internal unit of protocol operations when users interact with the system. All operations are executed in the TON blockchain and can be verified through public explorers. ECU is not an investment instrument. | ECU (Electronic Coin Unit) — служебный токен сети TON, используемый в смарт-контрактах протокола ECU. Протокол выполняет on-chain операции с цифровыми объектами, создаваемыми и управляемыми через контрактную логику. ECU используется как внутренняя единица операций протокола при взаимодействии пользователей с системой. Все операции выполняются в блокчейне TON и проверяются через публичные обозреватели. ECU не является инвестиционным инструментом. |

## About ECU

| EN | RU |
|----|-----|
| ECU is a utility token of the ECU Protocol on the TON network. The token is used within the system for operations defined by contract logic and when users interact with smart contracts. ECU is used exclusively within the protocol and is not intended for use outside its logic. | ECU — служебный токен протокола ECU в сети TON. Токен используется внутри системы для операций, предусмотренных контрактной логикой, и при взаимодействии пользователей со смарт-контрактами. ECU применяется исключительно внутри протокола и не предназначен для использования вне его логики. |

## ECU Protocol

| EN | RU |
|----|-----|
| ECU Protocol is a system of smart contracts in the TON mainnet. The contracts ensure execution of operations with digital objects created through contract logic. Users interact with the protocol directly through the blockchain. All operations are executed on-chain and can be verified through public explorers. This approach ensures transparency and eliminates the need to trust centralized services. | ECU Protocol — система смарт-контрактов в основной сети TON. Контракты обеспечивают выполнение операций с цифровыми объектами, создаваемыми через контрактную логику. Пользователи взаимодействуют с протоколом напрямую через блокчейн. Все операции выполняются on-chain и проверяются через публичные обозреватели. Такой подход обеспечивает прозрачность и исключает необходимость доверия к централизованным сервисам. |

## On-chain Transparency

| EN | RU |
|----|-----|
| ECU Protocol operates fully on-chain on the TON network. All transactions related to the ECU token and protocol operations are available through public blockchain explorers. Any user can verify the system's operation, view contracts, and ensure transparency of operations. | Протокол ECU работает полностью on-chain в сети TON. Все транзакции, связанные с токеном ECU и операциями протокола, доступны через публичные обозреватели блокчейна. Любой пользователь может проверить работу системы, просмотреть контракты и убедиться в прозрачности операций. |

## Why TON

| EN | RU |
|----|-----|
| The TON network provides an open smart contract architecture and enables building fully on-chain protocols. Thanks to integration with user wallets and high network speed, TON is suitable for implementing application protocols where key operations are executed in the blockchain. ECU Protocol uses TON's capabilities for transparent and verifiable system operation. | Сеть TON предоставляет открытую архитектуру смарт-контрактов и позволяет строить полностью on-chain протоколы. Благодаря интеграции с пользовательскими кошельками и высокой скорости работы, TON подходит для реализации прикладных протоколов, в которых ключевые операции выполняются в блокчейне. ECU Protocol использует возможности TON для прозрачной и проверяемой работы системы. |

## Community

| EN | RU |
|----|-----|
| Official ECU Protocol updates are published in the project's Telegram channel. | Официальные обновления ECU Protocol публикуются в Telegram-канале проекта. |

## Disclaimer

| EN | RU |
|----|-----|
| The information on this site is provided for informational purposes only. ECU is a utility token used within the ECU Protocol for smart contract operations. The token does not constitute an investment instrument and does not provide financial guarantees. | Информация на данном сайте предоставлена исключительно в информационных целях. ECU является utility-токеном, используемым внутри протокола ECU для выполнения операций смарт-контрактов. Токен не представляет собой инвестиционный инструмент и не предоставляет финансовых гарантий. |

---

# 17. Результат

После обновления сайт должен выглядеть как **полноценный сайт протокола ECU**, а не как страница для верификации. Модератор Tonkeeper видит продукт с понятной структурой, без маркетинговых обещаний и без раскрытия продуктовой тайны ECU-cash.

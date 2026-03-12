export type Lang = 'en' | 'ru'

export const translations = {
  en: {
    nav: {
      about: 'About',
      protocol: 'Protocol',
      contracts: 'Contracts',
      community: 'Community',
    },
    hero: {
      title: 'ECU Protocol',
      subtitle: 'Utility-token infrastructure on TON',
      mainnet: 'Running on TON Mainnet',
      text: 'ECU (Electronic Coin Unit) is a utility token of the TON network, used in ECU Protocol smart contracts. The protocol performs on-chain operations with digital objects created and managed through contract logic. ECU is used as the internal unit of protocol operations when users interact with the system. All operations are executed in the TON blockchain and can be verified through public explorers.',
      disclaimer: 'ECU is not an investment instrument and does not provide financial guarantees.',
      jettonMaster: 'Jetton Master',
      utilityContract: 'Utility Contract',
      telegram: 'Telegram',
    },
    about: {
      title: 'What is ECU',
      text: 'ECU is a utility token of the ECU Protocol on the TON network. The token is used within the system for operations defined by contract logic and when users interact with smart contracts. ECU is used exclusively within the protocol and is not intended for use outside its logic.',
    },
    protocol: {
      title: 'How the protocol works',
      text: 'ECU Protocol is a system of smart contracts in the TON mainnet. The contracts ensure execution of operations with digital objects created through contract logic. Users interact with the protocol directly through the blockchain. All operations are executed on-chain and can be verified through public explorers. This approach ensures transparency and eliminates the need to trust centralized services.',
    },
    contracts: {
      title: 'Protocol contracts',
      description: 'Key ECU components run on the TON network and can be verified through public blockchain explorers.',
      jetton: {
        title: 'Jetton Master',
        text: 'The main ECU token contract. Defines token parameters and creates user jetton wallets.',
        button: 'View on Tonviewer',
      },
      utility: {
        title: 'Utility Contract',
        text: 'ECU Protocol contract that executes protocol operations and interacts with protocol smart contracts.',
        button: 'View on Tonviewer',
      },
    },
    transparency: {
      title: 'System transparency',
      text: 'ECU Protocol operates fully on-chain on the TON network. All transactions related to the ECU token and protocol operations are available through public blockchain explorers. Any user can verify the system\'s operation, view contracts, and ensure transparency of operations.',
    },
    whyTon: {
      title: 'Why TON',
      text: 'The TON network provides an open smart contract architecture and enables building fully on-chain protocols. Thanks to integration with user wallets and high network speed, TON is suitable for implementing application protocols where key operations are executed in the blockchain. ECU Protocol uses TON\'s capabilities for transparent and verifiable system operation.',
    },
    community: {
      title: 'Community',
      text: 'Official ECU Protocol updates are published in the project\'s Telegram channel.',
      button: 'Telegram',
    },
    footer: {
      title: 'ECU Protocol',
      mainnet: 'Running on TON Mainnet',
      tonMainnet: 'TON Mainnet',
    },
    disclaimer: {
      text: 'The information on this site is provided for informational purposes only. ECU is a utility token used within the ECU Protocol for smart contract operations. The token does not constitute an investment instrument and does not provide financial guarantees.',
    },
  },
  ru: {
    nav: {
      about: 'О проекте',
      protocol: 'Протокол',
      contracts: 'Контракты',
      community: 'Сообщество',
    },
    hero: {
      title: 'ECU Protocol',
      subtitle: 'Utility-token infrastructure on TON',
      mainnet: 'Running on TON Mainnet',
      text: 'ECU (Electronic Coin Unit) — служебный токен сети TON, используемый в смарт-контрактах протокола ECU. Протокол выполняет on-chain операции с цифровыми объектами, создаваемыми и управляемыми через контрактную логику. ECU используется как внутренняя единица операций протокола при взаимодействии пользователей с системой. Все операции выполняются в блокчейне TON и проверяются через публичные обозреватели.',
      disclaimer: 'ECU не является инвестиционным инструментом и не предоставляет финансовых гарантий.',
      jettonMaster: 'Jetton Master',
      utilityContract: 'Utility Contract',
      telegram: 'Telegram',
    },
    about: {
      title: 'Что такое ECU',
      text: 'ECU — служебный токен протокола ECU в сети TON. Токен используется внутри системы для операций, предусмотренных контрактной логикой, и при взаимодействии пользователей со смарт-контрактами. ECU применяется исключительно внутри протокола и не предназначен для использования вне его логики.',
    },
    protocol: {
      title: 'Как работает протокол',
      text: 'ECU Protocol — система смарт-контрактов в основной сети TON. Контракты обеспечивают выполнение операций с цифровыми объектами, создаваемыми через контрактную логику. Пользователи взаимодействуют с протоколом напрямую через блокчейн. Все операции выполняются on-chain и проверяются через публичные обозреватели. Такой подход обеспечивает прозрачность и исключает необходимость доверия к централизованным сервисам.',
    },
    contracts: {
      title: 'Контракты протокола',
      description: 'Основные компоненты ECU работают в сети TON и доступны для проверки через публичные обозреватели блокчейна.',
      jetton: {
        title: 'Jetton Master',
        text: 'Основной контракт токена ECU. Определяет параметры токена и обеспечивает создание jetton-кошельков пользователей.',
        button: 'View on Tonviewer',
      },
      utility: {
        title: 'Utility Contract',
        text: 'Контракт протокола ECU, обеспечивающий выполнение операций протокола и взаимодействие со смарт-контрактами протокола.',
        button: 'View on Tonviewer',
      },
    },
    transparency: {
      title: 'Прозрачность системы',
      text: 'Протокол ECU работает полностью on-chain в сети TON. Все транзакции, связанные с токеном ECU и операциями протокола, доступны через публичные обозреватели блокчейна. Любой пользователь может проверить работу системы, просмотреть контракты и убедиться в прозрачности операций.',
    },
    whyTon: {
      title: 'Почему TON',
      text: 'Сеть TON предоставляет открытую архитектуру смарт-контрактов и позволяет строить полностью on-chain протоколы. Благодаря интеграции с пользовательскими кошельками и высокой скорости работы, TON подходит для реализации прикладных протоколов, в которых ключевые операции выполняются в блокчейне. ECU Protocol использует возможности TON для прозрачной и проверяемой работы системы.',
    },
    community: {
      title: 'Сообщество',
      text: 'Официальные обновления ECU Protocol публикуются в Telegram-канале проекта.',
      button: 'Telegram',
    },
    footer: {
      title: 'ECU Protocol',
      mainnet: 'Running on TON Mainnet',
      tonMainnet: 'TON Mainnet',
    },
    disclaimer: {
      text: 'Информация на данном сайте предоставлена исключительно в информационных целях. ECU является utility-токеном, используемым внутри протокола ECU для выполнения операций смарт-контрактов. Токен не представляет собой инвестиционный инструмент и не предоставляет финансовых гарантий.',
    },
  },
} as const

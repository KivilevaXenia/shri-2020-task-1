[{
    shouldDeps: [
        {
           block: 'payment'
        },
        {
            block: 'form',
            mods: {
                border: 'all',
                view: 'default'
            }
        },
        {
            block: 'form',
            elem: 'item',
            mods: {
                border: 'bottom',
                distribute: 'between',
                'vertical-align': 'center',
                'indent-b': ['xxxs', 'xxs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl'],
                'space-h': ['xxxs', 'xxs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl'],
                'space-v': ['xxxs', 'xxs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl']
            }
        },
        {
            block: 'form',
            elem: 'label',
            mods: {
                width: 'default'
            }
        },
        {
            block: 'text'
        },
        {
            block: 'button',
            mods: {
                size: ['s', 'm', 'l', 'xl', 'xxl'],
                width: 'full'
            }
        }
    ]
}]
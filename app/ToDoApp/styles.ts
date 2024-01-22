const Mocha = {
    Rosewater: '#dc8a78',
    Flamingo: '#f2cdcd',
    Pink: '#f5c2e7',
    Mauve: '#cba6f7',
    Red: '#f38ba8',
    Maroon: '#eba0ac',
    Peach: '#fab387',
    Yellow: '#f9e2af',
    Green: '#a6e3a1',
    Teal: '#94e2d5',
    Sky: '#89dceb',
    Sapphire: '#74c7ec',
    Blue: '#89b4fa',
    Lavender: '#b4befe',
    Text: '#cdd6f4',
    Subtext1: '#bac2de',
    Subtext0: '#a6adc8',
    Overlay2: '#9399b2',
    Overlay1: '#7f849c',
    Overlay0: '#6c7086',
    Surface2: '#585b70',
    Surface1: '#45475a',
    Surface0: '#313244',
    Base: '#1e1e2e',
    Mantle: '#181825',
    Crust: '#11111b',
};

const Latte = {
    Rosewater: '#dc8a78',
    Flamingo: '#dd7878',
    Pink: '#ea76cb',
    Mauve: '#8839ef',
    Red: '#d20f39',
    Maroon: '#e64553',
    Peach: '#fe640b',
    Yellow: '#df8e1d',
    Green: '#40a02b',
    Teal: '#179299',
    Sky: '#04a5e5',
    Sapphire: '#209fb5',
    Blue: '#1e66f5',
    Lavender: '#7287fd',
    Text: '#4c4f69',
    Subtext1: '#5c5f77',
    Subtext0: '#6c6f85',
    Overlay2: '#7c7f93',
    Overlay1: '#8c8fa1',
    Overlay0: '#9ca0b0',
    Surface2: '#acb0be',
    Surface1: '#bcc0cc',
    Surface0: '#ccd0da',
    Base: '#eff1f5',
    Mantle: '#e6e9ef',
    Crust: '#dce0e8',
};

interface IStyleSheet {
    text: {
        color: string;
    };
    textInput: {
        color: string;
        backgroundColor: string;
    };
    container: {
        flex: number;
        backgroundColor: string;
    };
}

import { StyleSheet } from 'react-native';

const MochaStyleSheet = StyleSheet.create<IStyleSheet>({
    text: {
        color: Mocha.Text,
    },
    textInput: {
        color: Mocha.Text,
        backgroundColor: Mocha.Surface0,
    },
    container: {
        flex: 1,
        backgroundColor: Mocha.Base,
    },
});

const LatteStyleSheet = StyleSheet.create<IStyleSheet>({
    text: {
        color: Latte.Text,
    },
    textInput: {
        color: Latte.Text,
        backgroundColor: Latte.Surface0,
    },
    container: {
        flex: 1,
        backgroundColor: Latte.Base,
    },
});

const Default = StyleSheet.create({
    text: {
        fontSize: 24,
        color: 'black',
        fontFamily: 'monospace',
        textAlign: 'center',
        padding: 10,
    },
    textInput: {
        fontSize: 24,
        color: 'black',
        fontFamily: 'monospace',
        margin: 10,
        borderWidth: 1,
        flex: 1,
        textAlignVertical: 'top',
        padding: 10,
    },
});

const blur = (color: string) => {};

const composeStyles = (...styles: any[]) => {
    return Array.from(styles).reduce(
        (prev, curr) => StyleSheet.compose(prev, curr),
        {},
    );
};

export {
    Mocha,
    Latte,
    MochaStyleSheet,
    LatteStyleSheet,
    Default,
    composeStyles,
};

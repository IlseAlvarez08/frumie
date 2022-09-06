import { Asset, useAssets } from 'expo-asset';

const [assets, error] = useAssets([
    require('../../assets/progress.png'), 
]);

export default assets;
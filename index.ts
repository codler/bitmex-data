/**
 * @author Han Lin Yap
 * Feel free to donate btc: 1NibBDZPvJCm568CZMnJUBJoPyUhW7aSag
 */
import { download } from 'bitmex-data-downloader';

download({
    path: 'data',
    startDate: new Date('2018'),
    endDate: new Date(),
});
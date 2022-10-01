var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Subscription } from 'rxjs';
var BlocBuilder = /** @class */ (function (_super) {
    __extends(BlocBuilder, _super);
    function BlocBuilder(props) {
        var _this = _super.call(this, props) || this;
        _this.bloc = props.bloc;
        _this.builder = props.builder;
        _this.state = {
            blocState: _this.bloc.state
        };
        _this.subscription = Subscription.EMPTY;
        return _this;
    }
    BlocBuilder.prototype.subscribe = function () {
        var _this = this;
        this.subscription = this.bloc.listen(function (state) {
            _this.setState({ blocState: state });
        });
    };
    BlocBuilder.prototype.unsubscribe = function () {
        this.subscription.unsubscribe();
    };
    BlocBuilder.prototype.componentDidMount = function () {
        this.subscribe();
    };
    BlocBuilder.prototype.componentWillUnmount = function () {
        this.unsubscribe();
    };
    BlocBuilder.prototype.render = function () {
        return this.builder(this.state.blocState);
    };
    return BlocBuilder;
}(React.Component));
export { BlocBuilder };
//# sourceMappingURL=bloc-builder.js.map
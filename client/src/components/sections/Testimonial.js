import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Testimonial extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap invert-color has-bg-color',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Trusted by hundreds',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-rotate-from-left" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-24">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-01.png')}
                        alt="Testimonial 01"
                        width={56}
                        height={56} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in repre voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Vitae aliquet nec ullamcorper in Excepteur sint occaecat.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 pt-24 has-top-divider">
                    <span className="testimonial-item-name">
                      Kendra Kinson
                    </span>
                    <span> - </span>
                    <span className="testimonial-item-link">
                      <a href="#0">AppName</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-rotate-from-left" data-reveal-container=".tiles-wrap" data-reveal-delay="100">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-24">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-02.png')}
                        alt="Testimonial 02"
                        width={56}
                        height={56} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in repre voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Vitae aliquet nec ullamcorper in Excepteur sint occaecat.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 pt-24 has-top-divider">
                    <span className="testimonial-item-name">
                      Emilia Jovic
                    </span>
                    <span> - </span>
                    <span className="testimonial-item-link">
                      <a href="#0">AppName</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-rotate-from-left" data-reveal-container=".tiles-wrap" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-24">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-03.png')}
                        alt="Testimonial 03"
                        width={56}
                        height={56} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in repre voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Vitae aliquet nec ullamcorper in Excepteur sint occaecat.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 pt-24 has-top-divider">
                    <span className="testimonial-item-name">
                      Mark Walker
                    </span>
                    <span> - </span>
                    <span className="testimonial-item-link">
                      <a href="#0">AppName</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-rotate-from-left" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-24">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-04.png')}
                        alt="Testimonial 04"
                        width={56}
                        height={56} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in repre voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Vitae aliquet nec ullamcorper in Excepteur sint occaecat.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 pt-24 has-top-divider">
                    <span className="testimonial-item-name">
                      Dave Patrick
                    </span>
                    <span> - </span>
                    <span className="testimonial-item-link">
                      <a href="#0">AppName</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-rotate-from-left" data-reveal-container=".tiles-wrap" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-24">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-05.png')}
                        alt="Testimonial 05"
                        width={56}
                        height={56} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in repre voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Vitae aliquet nec ullamcorper in Excepteur sint occaecat.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 pt-24 has-top-divider">
                    <span className="testimonial-item-name">
                      Margaret Han
                    </span>
                    <span> - </span>
                    <span className="testimonial-item-link">
                      <a href="#0">AppName</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-rotate-from-left" data-reveal-container=".tiles-wrap" data-reveal-delay="500">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-24">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-06.png')}
                        alt="Testimonial 06"
                        width={56}
                        height={56} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in repre voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Vitae aliquet nec ullamcorper in Excepteur sint occaecat.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 pt-24 has-top-divider">
                    <span className="testimonial-item-name">
                      Jeffrey Harris
                    </span>
                    <span> - </span>
                    <span className="testimonial-item-link">
                      <a href="#0">AppName</a>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
import Contact from './services/contact';
import contactAddressInput from './directives/contactAddressInput';
import contactPhotoRow from './directives/contactPhotoRow';
import contactClear from './directives/contactClear';
import contactDetails from './directives/contactDetails';
import contactDisplay from './directives/contactDisplay';
import contactDisplayModal from './modals/contactDisplayModal';
import contactPhotoModal from './modals/contactPhotoModal';
import contactSelectorModal from './modals/contactSelectorModal';
import contactSelectorForm from './directives/contactSelectorForm';
import contactPhotoForm from './directives/contactPhotoForm';
import contactEncrypted from './directives/contactEncrypted';
import contactError from './directives/contactError';
import contactItem from './directives/contactItem';
import contactKeyPinning from './directives/contactKeyPinning';
import contactArrowsSort from './directives/contactArrowsSort';
import contactList from './directives/contactList';
import contactNoResult from './directives/contactNoResult';
import contactPgp from './directives/contactPgp';
import contactPlaceholder from './directives/contactPlaceholder';
import contactPublicKeys from './directives/contactPublicKeys';
import contactPublicKeyTable from './directives/contactPublicKeyTable';
import contactPublicKeyLabel from './directives/contactPublicKeyLabel';
import contactToolbar from './directives/contactToolbar';
import contactView from './directives/contactView';
import contactRightPanel from './directives/contactRightPanel';
import contactCache from './factories/contactCache';
import contactDetailsModel from './factories/contactDetailsModel';
import contactDownloader from './factories/contactDownloader';
import contactEditor from './factories/contactEditor';
import contactEmails from './factories/contactEmails';
import contactImporter from './factories/contactImporter';
import contactImportEncryption from './factories/contactImportEncryption';
import contactKey from './factories/contactKey';
import contactMerger from './directives/contactMerger';
import contactMergerFactory from './factories/contactMerger';
import contactSchema from './factories/contactSchema';
import contactKeyAssigner from './factories/contactKeyAssigner';
import contactEncryption from './factories/contactEncryption';
import contactTransformLabel from './factories/contactTransformLabel';
import contactUI from './factories/contactUI';
import contactSelectorModel from './factories/contactSelectorModel';
import contactSpam from './factories/contactSpam';
import contactFilter from './filters/contact';
import spam from './filters/spam';
import contactAskEncryption from './modals/contactAskEncryption';
import contactBeforeToLeaveModal from './modals/contactBeforeToLeaveModal';
import contactEncryptionModal from './modals/contactEncryptionModal';
import contactLoaderModal from './modals/contactLoaderModal';
import contactMergerModal from './modals/contactMergerModal';
import contactModal from './modals/contactModal';
import importContactModal from './modals/importContactModal';
import importCardDropzone from './directives/importCardDropzone';

export default angular
    .module('proton.contact', ['vs-repeat'])
    .directive('importCardDropzone', importCardDropzone)
    .run((contactEditor, contactMerger) => {
        contactEditor.init();
        contactMerger.init();
    })
    .directive('contactAddressInput', contactAddressInput)
    .directive('contactPhotoRow', contactPhotoRow)
    .directive('contactClear', contactClear)
    .directive('contactDisplay', contactDisplay)
    .directive('contactDetails', contactDetails)
    .directive('contactEncrypted', contactEncrypted)
    .directive('contactError', contactError)
    .directive('contactItem', contactItem)
    .directive('contactKeyPinning', contactKeyPinning)
    .directive('contactArrowsSort', contactArrowsSort)
    .directive('contactList', contactList)
    .directive('contactNoResult', contactNoResult)
    .directive('contactPgp', contactPgp)
    .directive('contactPlaceholder', contactPlaceholder)
    .directive('contactMerger', contactMerger)
    .directive('contactPublicKeys', contactPublicKeys)
    .directive('contactPublicKeyTable', contactPublicKeyTable)
    .directive('contactPublicKeyLabel', contactPublicKeyLabel)
    .directive('contactToolbar', contactToolbar)
    .directive('contactView', contactView)
    .directive('contactRightPanel', contactRightPanel)
    .directive('contactPhotoForm', contactPhotoForm)
    .directive('contactSelectorForm', contactSelectorForm)
    .factory('Contact', Contact)
    .factory('contactCache', contactCache)
    .factory('contactDetailsModel', contactDetailsModel)
    .factory('contactDisplayModal', contactDisplayModal)
    .factory('contactPhotoModal', contactPhotoModal)
    .factory('contactSelectorModal', contactSelectorModal)
    .factory('contactDownloader', contactDownloader)
    .factory('contactEditor', contactEditor)
    .factory('contactEmails', contactEmails)
    .factory('contactImporter', contactImporter)
    .factory('contactImportEncryption', contactImportEncryption)
    .factory('contactKey', contactKey)
    .factory('contactMerger', contactMergerFactory)
    .factory('contactSchema', contactSchema)
    .factory('contactTransformLabel', contactTransformLabel)
    .factory('contactUI', contactUI)
    .factory('contactEncryption', contactEncryption)
    .factory('contactSelectorModel', contactSelectorModel)
    .factory('contactSpam', contactSpam)
    .factory('contactKeyAssigner', contactKeyAssigner)
    .filter('contact', contactFilter)
    .filter('spam', spam)
    .factory('contactAskEncryption', contactAskEncryption)
    .factory('contactBeforeToLeaveModal', contactBeforeToLeaveModal)
    .factory('contactEncryptionModal', contactEncryptionModal)
    .factory('contactLoaderModal', contactLoaderModal)
    .factory('contactMergerModal', contactMergerModal)
    .factory('contactModal', contactModal)
    .factory('importContactModal', importContactModal).name;
